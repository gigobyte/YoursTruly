import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Layout from './pages/Layout'
import Home from './pages/home/Home'

import injectTapEventPlugin from 'react-tap-event-plugin'

const app = document.querySelector('.render-target')

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    paper: {
        backgroundColor: 'black'
    },
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
           <Route path="/" component={Layout}>
               <IndexRoute component={Home}></IndexRoute>
           </Route>
       </Router>
   	</MuiThemeProvider>, app
)
