import { Button } from '@mui/material';
import React, { useState } from 'react'

const FileUpload = () => {
    const [selectedFile, setFile] = useState(undefined);
    function handleChange(event: any) {
        setFile(event.target.files[0])
    }
    return (
        <Button variant='contained' >
            <input type="file" onChange={handleChange} />
        </Button>
    )
}

export default FileUpload