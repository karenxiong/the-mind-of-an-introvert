import React from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import IntrovertTheme from './IntrovertTheme'

// import Main from './Main' // Our custom react component
import CalendarSnackbar from './components/CalendarSnackbar' // Our custom react component
import AniSlider from './components/AniSlider'
import RaisedBtn from './components/RaisedBtn'
import Tabz from './components/Tabz'
import Stepz from './components/Stepz'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
// render(<Main />, document.getElementById('app'))
render(<MuiThemeProvider muiTheme={getMuiTheme(IntrovertTheme)}>
				<CalendarSnackbar />
			</MuiThemeProvider>, document.getElementById('calendar-snackbar'))

render(<MuiThemeProvider muiTheme={getMuiTheme(IntrovertTheme)}>
				<AniSlider />
			</MuiThemeProvider>, document.getElementById('AniSlider'))

render(<MuiThemeProvider muiTheme={getMuiTheme(IntrovertTheme)}>
				<RaisedBtn />
			</MuiThemeProvider>, document.getElementById('RaisedBtn'))

render(<MuiThemeProvider muiTheme={getMuiTheme(IntrovertTheme)}>
				<Tabz />
			</MuiThemeProvider>, document.getElementById('Tabz'))

render(<MuiThemeProvider muiTheme={getMuiTheme(IntrovertTheme)}>
				<Stepz />
			</MuiThemeProvider>, document.getElementById('Stepz'))