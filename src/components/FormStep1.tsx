import { Stack } from '@mui/system'
import React from 'react'
import FormTextInput from './common/FormTextInput'

const FormStep1 = () => {
    return (
        <Stack direction="column" spacing={2} >
            <Stack direction="row" spacing={2}>
                <FormTextInput name="firstName" label="Enter first name" />
                <FormTextInput name="lastName" label="Enter last name" />
            </Stack>
            <FormTextInput name="email" label="Enter email" />
            <FormTextInput name="message" label="Enter message" />
        </Stack>
    )
}

export default FormStep1