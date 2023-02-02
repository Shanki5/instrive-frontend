
import { Stack } from '@mui/system'
import React from 'react'
import { useForm, FormProvider } from "react-hook-form"
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import axios from 'axios';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required').default(''),
    lastName: Yup.string().required('Last name is required').default(''),
    email: Yup.string().email().required('Email is required').default(''),
    message: Yup.string().required('Message is required').default(''),
    file: Yup.mixed().required('Must upload file')
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

    const onSubmit = (formData: any) => {
        axios.post('https://webhook.site/1b7922e6-ee65-4fc9-a3a4-e0659870c77c', formData)
            .then((response: any) => console.log(response))
            .catch((error: any) => console.log(error))
    }

    function getButton(stepIndex: number) {
        switch (stepIndex) {
            case 0: {
                return (
                    <Button variant='outlined' onClick={handleNext}>Next</Button>
                );
            }
            case 1: {
                return (
                    <Button variant='outlined' onClick={methods.handleSubmit(onSubmit)}>Submit</Button>
                );
            }
        }
    }
    const methods = useForm<FormInputType>({
        defaultValues: validationSchema.getDefaultFromShape(),
        resolver: yupResolver(validationSchema)
    })
    return (
        <form>
            <FormProvider {...methods}>
                <Stack direction="column" spacing={5} p={5}>

                    <Stepper activeStep={activeStep} >


                        {steps.map((label, _) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>

                            </Step>
                        ))}

                    </Stepper>
                    {GetStepContent(activeStep)}
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        <Button variant='outlined' onClick={handleBack}>Back</Button>
                        {getButton(activeStep)}
                    </Stack>
                </Stack>

            </FormProvider>
        </form>
    )
}



export default Form

function GetStepContent(stepIndex: number) {

    switch (stepIndex) {
        case 0: {
            return (<FormStep1 />);
        }
        case 1: {
            return (<FormStep2 />);
        }
    }

}