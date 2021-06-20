import { Input as WMInput } from '@windmill/react-ui'
import React from 'react'

export const Input = (props: any) => {
  return (
    <WMInput
      {...props}
      style={{ ...styles.input, ...props.style }}
      // @todo: css prop bug
      css={''}
    ></WMInput>
  )
}

const styles: any = {}
