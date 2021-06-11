import { Input } from 'antd'
import React from 'react'

import { TypeWriterAnimation } from '@/components/shared'

export const SplashIntro = () => {
  return (
    <div style={styles.container}>
      <TypeWriterAnimation>
        :) Hello, my name is Thomas. Welcome! What’s your name?
      </TypeWriterAnimation>
      <Input></Input>
    </div>
  )
}

const styles: any = {
  container: {
    width: '100%',
    // height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
}
