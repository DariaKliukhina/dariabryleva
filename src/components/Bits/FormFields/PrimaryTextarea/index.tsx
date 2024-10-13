import React from 'react'
import { Textarea } from '@mantine/core'
import classes from "./PrimaryTextarea.module.css"

export const PrimaryTextarea = ({label="", placeholder="", withAsterisk=false, ...props}) => {
  return (
    <Textarea
    withAsterisk={withAsterisk}
    label={label}
    placeholder={placeholder}
    classNames={classes}
    {...props}
  />
  )
}

