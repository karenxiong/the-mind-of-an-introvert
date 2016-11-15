import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views'
import AniSlider from './AniSlider'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10
  }
}

export default class Tabz extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0,
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

  handleChange = (value) => {
    this.setState({
      slideIndex: value
    })
  }

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Events" value={0} />
          <Tab label="Scheduled Events" value={1} />
          <Tab label="Event Durations" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div className="text-center">
            <h2>Events</h2>
            <h4>Introverts tend to think about things before they speak - 
            they want to have a full understanding of a concept before 
            they voice an opinion or offer an explanation. For this reason, 
            introverts tend to prepare themselves well ahead of time before 
            any social event. This often causes stress which would result in 
            social events appearing tedious for introverts.
            <br /><br /> Click on the tabs to explore the affects of social events on introverts. </h4>
          </div>
          <div style={styles.slide}>
            <div className="col-sm-7">
              <h2>Scheduled Events</h2>
              <h4>Going out to events may seem fun and exciting to extraverts, but to introverts 
              it is exhausting. The thought of long socializations and small talks would seem like a nighmare to introverts.
              Though sometimes, events may be cancelled and that would exhilarate them.
              <br /><br /> Click on the button on the right to cancel a social event.</h4>
            </div>
            <div className="col-sm-5 snackbtn">
              <RaisedButton
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
            </div>
          </div>
          <div style={styles.slide}>
            <div className="col-sm-7">
              <h2>Event Durations</h2>
              <h4>Extraverts gain energy from social interactions but introverts have to 
              expend energy in those social settings. After spending a long period of time 
              at a party introverts often feel a need to "recharge" by spending a long period 
              of time alone. <br /><br />Move the slider on the right to determine the duration of 
              the party. The more you move, the more time and energy is drained at a party.</h4>
              <br />
            </div>
            <div className="col-sm-5">
              <AniSlider />
            </div>
          </div>
        </SwipeableViews>
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