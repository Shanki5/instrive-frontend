import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import FileUpload from './common/FileUpload'

const FormStep2 = () => {

    return (
        <Stack direction="column" spacing={2} p="2rem 0">
            <FileUpload />
        </Stack >

    )
}

export default FormStep2