import React from 'react'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'

export default class CalendarSnackbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      buttonClicked: false
    }
  }

  handleTouchTap() {
    this.setState({
      open: true
    })
  }

  handleRequestClose() {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Add to my calendar"
          secondary
          onTouchTap={() => {
            this.setState({buttonClicked: true})
            this.handleTouchTap()
          }}
        />
        
        {this.state.buttonClicked ? 
          <img src="img/ex.gif" alt="ex" /> : <img src="img/mouse.gif" alt="ex" /> 
        }

        <Snackbar
          open={this.state.open}
          message="Event added to your calendar"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
      </div>
    )
  }
}