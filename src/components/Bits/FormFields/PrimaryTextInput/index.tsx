import React from 'react'
import { TextInput } from '@mantine/core'
import classes from "./PrimaryTextInput.module.css"

export const PrimaryTextInput = ({label="", placeholder="", withAsterisk=false, ...props}) => {
  return (
    <TextInput
    withAsterisk={withAsterisk}
    label={label}
    placeholder={placeholder}
    classNames={classes}
    {...props}
  />
  )
}
