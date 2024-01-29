import ExpandIcon  from '@mui/icons-material/Expand'
import ExpandMoreIcon  from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function MuiAccordion() {
    const [expanded,setExpended]=useState<string | false>(false);
    console.log({expanded});
    
    const handleChange=(isExpanded:boolean,panel:string)=>{
        setExpended(isExpanded?panel:false);
    }

  return (
    <div>
        <Accordion expanded={expanded==='panel1'} onChange={(event,isExpanded)=> handleChange(isExpanded,'panel1')}>
            <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officiis, 
                    ea beatae magnam atque totam molestias? 
                    Nobis repudiandae voluptatum eligendi.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded==='panel2'} onChange={(event,isExpanded)=> handleChange(isExpanded,'panel2')}>
            <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officiis, 
                    ea beatae magnam atque totam molestias? 
                    Nobis repudiandae voluptatum eligendi.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded==='panel3'} onChange={(event,isExpanded)=> handleChange(isExpanded,'panel3')}>
            <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officiis, 
                    ea beatae magnam atque totam molestias? 
                    Nobis repudiandae voluptatum eligendi.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}
