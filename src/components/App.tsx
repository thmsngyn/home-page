import React from 'react'

import { AppNav } from '@/components/navigation/AppNav'

export default () => {
  return (
    <div style={styles.fill}>
      <AppNav />
    </div>
  )
}

const styles: any = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
}
