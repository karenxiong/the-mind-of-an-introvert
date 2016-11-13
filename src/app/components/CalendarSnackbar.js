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
          className="snackbtn"
          label="Cancel Social Event"
          primary
          onTouchTap={() => {
            this.setState({buttonClicked: true})
            this.handleTouchTap()
          }}
        />
        
        {this.state.buttonClicked ? 
          <img className="img-responsive" src="img/jump.gif" alt="ex" /> : <img className="img-responsive" src="img/jump.jpg" alt="jump" /> 
        }

        <Snackbar
          open={this.state.open}
          message="Social Event Cancelled"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
      </div>
    )
  }
}