import { Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function MuiText() {
    const [value,setValue]=useState('');
  return (
    <>
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name'/>
                <TextField label='Name' variant="outlined"/>
                <TextField label='Name' variant="filled"/>
                <TextField label='Name' variant="standard"/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' size="small" color="secondary"/>
                <TextField label='Name' variant="outlined" size="small" color="secondary"/>
                <TextField label='Name' variant="filled" size="small" color="secondary"/>
                <TextField label='Name' variant="standard" size="small" color="secondary"/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant="outlined" size="small" color="secondary" required/>
                <TextField label='Name' variant="outlined" size="small" color="secondary" disabled/>
                 <TextField label='Password' type="password" variant="outlined" size="small" color="secondary" helperText='Do not share your password with anyone'/>
                 <TextField label='Password' type="password" variant="outlined" size="small"  value={value} onChange={(e)=>setValue(e.target.value)} error={!value} helperText={!value?'Required':'Do not share your password with anyone'}/>
                 <TextField label='Name' variant="outlined" size="small" color="secondary" InputProps={{readOnly:true}}/>
            </Stack>
        </Stack>
    </>
  )
}
