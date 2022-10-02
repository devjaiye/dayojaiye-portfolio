import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import {ThemeProvider} from './Context'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <ThemeProvider> 
     <App/>
     </ThemeProvider>,
  document.getElementById('root')
)



