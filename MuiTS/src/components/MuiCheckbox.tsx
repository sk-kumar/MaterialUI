import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Box, FormControlLabel,Checkbox, FormLabel,FormControl, FormGroup } from '@mui/material'
import React, { useState } from 'react'

export default function MuiCheckBox() {
    const [acceptTnC,setacceptTnC]=useState(false);
    const [skills,setSkills]=useState<string[]>([]);
    console.log(skills);
    
    // console.log({acceptTnC});
    
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setacceptTnC(event.target.checked)
    }
    const handleSkillChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const index =skills.indexOf(event.target.value)
        if(index===-1){
            setSkills([...skills,event.target.value])
        }else{
            setSkills(skills.filter((skill)=> skill !==event.target.value));
        }
    }
  return (
    <>
        <Box>
            <Box>
                <FormControlLabel label='I accept term and condition' control={<Checkbox checked={acceptTnC} onChange={handleChange}/>}/>
            </Box>
            <Box>
                <Checkbox icon={<BookmarkIcon/>} checkedIcon={<BookmarkBorderIcon/>} checked={acceptTnC} onChange={handleChange} />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel></FormLabel>
                    <FormGroup>
                        <FormControlLabel label='HTML' value='html' control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange}/>}/>
                        <FormControlLabel label='CSS' value='css' control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange}/>}/>
                        <FormControlLabel label='JavaScript' value='javascript' control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange}/>}/>
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    </>
  )
}
