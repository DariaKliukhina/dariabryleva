import React from 'react'
import { Box } from '@mantine/core'
import classes from "./FullPageWrapper.module.css"

export const FullPageWrapper = ({children}: {children: React.ReactElement}) => {
  return (
    <Box className={classes.root}>
      {children}
    </Box>
  )
}

