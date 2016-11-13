import React, {Component} from 'react'
import Slider from 'material-ui/Slider'

/**
 * The slider bar can have a set minimum and maximum, and the value can be
 * obtained through the value parameter fired on an onChange event.
 */
export default class AniSlider extends Component {
  state = {
    sliderValue: 100
  }

  handlesliderValue = (event, value) => {
    this.setState({sliderValue: value})
  }

  render() {
    const pictureNum = Math.floor(this.state.sliderValue / 100)

    return (
      <div>
        <Slider style={{width: '85%'}}
          min={100} max={700} step={1} 
          defaultValue={100} 
          value={this.state.sliderValue} 
          onChange={this.handlesliderValue} 
        />
        <img className="img-responsive" src={"img/party0" + pictureNum + ".jpg"} alt={"party0" + pictureNum} />
      </div>
    )
  }
}