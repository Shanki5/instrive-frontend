
import { Stack } from '@mui/system'
import React from 'react'
import FormTextInput from './common/FormTextInput'
import { useForm, FormProvider } from "react-hook-form"
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, StepContent } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required').default(''),
    lastName: Yup.string().required('Last name is required').default(''),
    email: Yup.string().email().required('Email is required').default(''),
    message: Yup.string().required('Message is required').default('')
})
const steps = ["Enter your details", "Upload Files"]
type FormInputType = Yup.InferType<typeof validationSchema>;

const Form = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const methods = useForm<FormInputType>({
        defaultValues: validationSchema.getDefaultFromShape(),
        resolver: yupResolver(validationSchema)
    })
    return (
        <FormProvider {...methods}>
            <form>
                <Stepper activeStep={activeStep} >


                    {steps.map((label, _) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>

                        </Step>
                    ))}

                    {getStepContent(activeStep)}


                </Stepper>

            </form>
        </FormProvider>
    )
}

export default Form

function getStepContent(stepIndex: number) {

    switch (stepIndex) {
        case 0: {
            return (<FormStep1 />);
        }
        case 1: {
            return (<FormStep2 />);
        }
    }

}