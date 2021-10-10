import React, {useState, useEffect} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import "./Checkout.css"
import AddressForm from './Form/AddressForm';
import PaymentForm from './Form/PaymentForm';
import { commerce } from '../../lib/commerce';
import { Link, useHistory } from 'react-router-dom';
const steps= ['Shipping address', 'Payment details'];

function Checkout({cart, order, onCaptureCheckout, error, refreshCart}) {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState([]);
    const [shippingData, setShippingData] = useState({})
    const [isFinished, setIsFinished] = useState(false);
    
    const history = useHistory();

    //checkoutTokenId useEffect
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})

                // console.log(token)

                setCheckoutToken(token)
            } catch (error) {
                console.log(error)
            }
        }
        generateToken();
    },[cart])

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const next = (data) => {
        setShippingData(data)

        nextStep();
    }
    console.log(shippingData)
    // setTimeout for loading progress bar animation and refreshCart function
    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true)
            refreshCart();
        }, 3000)
    }

    const generatorFunc = () => {
        return Math.random().toString(36).substr(2,10);
    }
    
    let Confirmation = () => order.customer ? (
        
        // 방법 1) Commerce.js 와 Stripe이 연동되어 있을 경우.

         <>
            <div>
                <Typography variant="h5">Thank you for your purchase!, {order.customer.firstname} {order.customer.lastname}</Typography>
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    ) : isFinished ? (

        // 방법 2) Commerce.js 와 Stripe 간에 계좌 연동이 안되있을 경우 ------ Active
        <>
            <div style={{marginTop:"5rem", marginBottom:"5rem", textAlign:"center"}}>
                <Typography variant="h5">Thank you for your purchase!, {shippingData.firstName} {shippingData.lastName}</Typography>
                <Typography style={{marginTop:"2rem"}} variant="subtitle1">Your order number is #{generatorFunc()}</Typography>
                <Typography style={{marginTop:"5rem"}} variant="subtitle2">Your order is being processed and will be shipped shortly.</Typography>
                <Typography style={{marginTop:"1rem"}} variant="subtitle2">Please keep a order number for your records. You'll also receive an email confirming your purchase.<br /> If you have any questions, please contact us at achladediston.com/customer-service.</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    ) : (

        // Loading design
        <div style={{marginTop:"5rem"}}>
            <CircularProgress />
        </div>
    )

    if(error) {
        <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    }

    const Form = () =>
        activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next}/> :
                            <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} timeout={timeout}/>
    return (
        <div className="checkout">
            <h4>Checkout</h4>
            <Stepper className="stepper" activeStep={activeStep}>
                {steps.map((step) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </div>
    )
}

export default Checkout
