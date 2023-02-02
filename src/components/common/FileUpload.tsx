import { Button } from '@mui/material';
import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form';

const FileUpload = () => {

    const { control } = useFormContext()

    return (
        <Controller
            name="file"
            control={control}
            render={(field) => (
                <Button variant='contained' >
                    <input type="file"  {...field} />
                </Button>
            )}
        />
    )
}

export default FileUpload