import { TextareaAutosize } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import React from 'react'

const NewGuide = () => {
    return (
        <div style={{ padding: 10 }}>
            <form noValidate autoComplete="off">
                <h2>אם ברצונך לבקש מדריך חדש שאינו באתר , כתוב כאן את בקשתך </h2    >
                <TextField
                    inputProps={{ style: { fontSize: 25 } }} // font size of input text
                    InputLabelProps={{ style: { fontSize: 25 } }} // font size of input label
                    style={{ width: "80%", textAlign: "right", direction: "rtl" }}
                    id="outlined-textarea"
                    placeholder="כתוב את בקשתך למדריך"
                    multiline
                    variant="outlined"
                />
            </form>
        </div>
    )
}

export default NewGuide;
