import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Paper } from '@mui/material'
import React from 'react'

const tableData=[
    {
        id:1,
        firstName:'Hogn',
        lastName:'lksd',
        email:'aasd@gmak.com'
    },
    {
        id:2,
        firstName:'asdh',
        lastName:'lksd',
        email:'aasd@gmak.com'
    },
    {
        id:3,
        firstName:'wyiuq',
        lastName:'lksd',
        email:'aasd@gmak.com'
    }
]

export default function MuiTable() {
  return (
    <>
        <TableContainer component={Paper} sx={{maxHeight:'3'}}>
            <Table aria-label='simple table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map((row)=>(
                            <TableRow key={row.id} sx={{'&:last-child td,&:last-child th':{border:0}}}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.firstName}</TableCell>
                                <TableCell>{row.lastName}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}
