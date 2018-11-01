import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';

const Crest = (props) => {
  return <SvgUri {...props} source={require('./../assets/whufc-logo.svg')} />
}

export default Crest;
