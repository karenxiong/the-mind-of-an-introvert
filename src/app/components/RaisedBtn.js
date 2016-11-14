import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  // margin: 12
};

const RaisedBtn = () => (
  <div>
    <RaisedButton label="Default" style={style} />
    <RaisedButton label="Primary" primary={true} style={style} />
  </div>
);

export default RaisedBtn;