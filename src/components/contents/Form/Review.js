import React from 'react'
import {Typography, List, ListItem, ListItemText } from '@material-ui/core';

function Review({checkoutToken}) {
    return (
        <>
            <Typography variant="h6" style={{paddingBottom: '1rem' ,borderBottom: "1px solid lightgray" ,width:"600px", textAlign:"center", marginTop: "2rem"}} gutterBottom>Order summary</Typography>
            <List style={{width:"600px"}}disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: '10px 0'}} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}

                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary="Total Price"/>
                    <Typography variant="subtitle1" style={{ fontWeight: 700}}>
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
            </List>   
        </>
    )
}

export default Review
