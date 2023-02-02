import { Controller, useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material'

import React from 'react'

interface IFormTextInputProps {
    name: string,
    label: string
}

const FormTextInput = ({ name, label }: IFormTextInputProps) => {
    const { control } = useFormContext()
    return (
        <Controller
            name={name}
            control={control}
            render={
                ({ field: { onChange, value }, fieldState: { error } }) => (
                    < TextField
                        helperText={error ? error.message : null}
                        error={!!error}
                        onChange={onChange}
                        value={value}
                        label={label}
                    />
                )
            }
        />
    )
}

export default FormTextInput