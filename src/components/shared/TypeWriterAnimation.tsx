import './TypeWriterAnimation.scss'

import React, { Fragment } from 'react'

export const TypeWriterAnimation: React.FunctionComponent<{}> = ({
  children,
}) => {
  return (
    <Fragment>
      <div>
        <h1>{children}</h1>
      </div>
    </Fragment>
  )
}
