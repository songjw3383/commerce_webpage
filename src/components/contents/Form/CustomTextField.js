import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller} from 'react-hook-form'

const CustomTextField = ({name, label}) => {
    const {control} = useFormContext();
    const isError = false;

    return (
        <>
        <Grid item xs={12} sm={6}>
        <Controller
                render={({ field }) => <TextField {...field} />}
                name={name}
                control={control}
                label={label}
                fullWidth       
                />
        </Grid>
        </>
    )
}

export default CustomTextField
