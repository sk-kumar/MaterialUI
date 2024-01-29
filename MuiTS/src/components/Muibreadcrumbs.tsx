import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import {Box, Breadcrumbs, Link } from '@mui/material'
import React from 'react'

export default function Muibreadcrumbs() {
  return (
    <>
      <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link href='#' underline='hover'>Home</Link>
          <Link href='#' underline='hover'>Catalogue</Link>
          <Link href='#' underline='hover'>Accessories</Link>
        </Breadcrumbs>
      </Box>

      <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb' separator='-'>
          <Link href='#' underline='hover'>Home</Link>
          <Link href='#' underline='hover'>Catalogue</Link>
          <Link href='#' underline='hover'>Accessories</Link>
        </Breadcrumbs>
      </Box>

      <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small'/>}>
          <Link href='#' underline='hover'>Home</Link>
          <Link href='#' underline='hover'>Catalogue</Link>
          <Link href='#' underline='hover'>Accessories</Link>
        </Breadcrumbs>
      </Box>

      <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small'/>} maxItems={2}>
          <Link href='#' underline='hover'>Home</Link>
          <Link href='#' underline='hover'>Catalogue</Link>
          <Link href='#' underline='hover'>Accessories</Link>
        </Breadcrumbs>
      </Box>

      <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small'/>} maxItems={3} itemsAfterCollapse={2}>
          <Link href='#' underline='hover'>Home</Link>
          <Link href='#' underline='hover'>Catalogue</Link>
          <Link href='#' underline='hover'>Accessories</Link>
        </Breadcrumbs>
      </Box>

      <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small'/>} maxItems={3} itemsBeforeCollapse={2}>
          <Link href='#' underline='hover'>Home</Link>
          <Link href='#' underline='hover'>Catalogue</Link>
          <Link href='#' underline='hover'>Accessories</Link>
        </Breadcrumbs>
      </Box>
    </>
  )
}
