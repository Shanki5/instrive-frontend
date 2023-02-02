import { Button } from '@mui/material';
import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form';

const FileUpload = () => {

    const { register } = useFormContext()

    return (


        <Button variant='contained' >
            <input type="file" {...register("file")} />
        </Button>

    )
}

export default FileUpload