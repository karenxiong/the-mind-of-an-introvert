import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  // margin: 12
};

export default class RaisedBtn extends Component {
  constructor() {
    super()
    this.state = { readMore: true}
  }

  toggleShowText() {
    this.setState({ readMore: !this.state.readMore })
  }

  render() {
    return (
      <div>
        {!this.state.readMore ? <h4>The common Introversion traits include:
        <ul>
          <li>Self-aware</li>
          <li>Thoughtful</li>
          <li>Interested in self-knowledge and self-understanding</li>
          <li>Tends to keep emotions private</li>
          <li>Quiet and reserved in large groups or around unfamiliar people</li>
          <li>More sociable around people they know well</li>
          <li>Learns well through observation</li>
        </ul>
</h4> : undefined }
        <RaisedButton
          style={style}
          label={this.state.readMore ? 'Read More' : 'Read Less'}
          primary={true} 
          onTouchTap={this.toggleShowText.bind(this)} 
        />
      </div>
    )
  }
}