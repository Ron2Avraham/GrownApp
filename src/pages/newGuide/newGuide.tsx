import { TextareaAutosize } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import React from 'react'

const NewGuide = () => {
    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField
                    style={{width:"80%"}}
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
            </form>
        </div>
    )
}

export default NewGuide;
