import '@/assets/css/tailwind.output.css'

import { Windmill } from '@windmill/react-ui'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import App from '@/components/App'
import store from '@/features'
import history from '@/utils/history'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Windmill>
        <App />
      </Windmill>
    </Router>
  </Provider>,
  document.getElementById('root'),
)
