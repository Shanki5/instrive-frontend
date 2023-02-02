
import { Stack } from '@mui/system'
import React from 'react'
import FormTextInput from './common/FormTextInput'
import { useForm, FormProvider } from "react-hook-form"
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import FormStep1 from './FormStep1';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required').default(''),
    lastName: Yup.string().required('Last name is required').default(''),
    email: Yup.string().email().required('Email is required').default(''),
    message: Yup.string().required('Message is required').default('')
})

type FormInputType = Yup.InferType<typeof validationSchema>;

const Form = () => {

    const methods = useForm<FormInputType>({
        defaultValues: validationSchema.getDefaultFromShape(),
        resolver: yupResolver(validationSchema)
    })
    return (
        <FormProvider {...methods}>
            <form>
                <FormStep1 />
            </form>
        </FormProvider>
    )
}

export default Form