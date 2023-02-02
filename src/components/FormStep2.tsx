import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import FileUpload from './common/FileUpload'

const FormStep2 = () => {

    return (
        <Stack direction="column" spacing={2} p="2rem 0">

            <FileUpload />
            <Button variant='outlined'>Submit</Button>
        </Stack >

    )
}

export default FormStep2