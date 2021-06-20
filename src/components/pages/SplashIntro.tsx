import { Button, Label } from '@windmill/react-ui'
import React from 'react'
import { useHistory } from 'react-router'

import { Input } from '@/components/lib'
import { TypeWriterAnimation } from '@/components/shared'

import { Routes } from '../navigation/AppNav'

export const SplashIntro = () => {
  const history = useHistory()

  return (
    <div style={styles.container}>
      <TypeWriterAnimation>
        :) Hello, my name is Thomas. Welcome! What’s your name?
      </TypeWriterAnimation>

      <Label>
        <Input
          autofocus={''}
          style={{ border: 'none', backgroundColor: 'transparent' }}
          // className="pl-8 text-gray-700"
        />
        <Button onClick={() => history.push(Routes.Home)}>Enter</Button>
      </Label>
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
