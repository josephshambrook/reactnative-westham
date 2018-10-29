import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import Theme from './../theme';

const types = ['paragraph', 'h1', 'h2', 'h3', 'h4', 'h5', 'small'];

const Type = ({variant = types[0], ...attrs}) => {
  if (types.indexOf(variant) < 0) {
    variant = types[0];
  }

  return <Text style={styles[variant]} {...attrs}>{attrs.children}</Text>
}

const styles = {
  paragraph: {
    fontSize: Theme.fontSizeDefault
  },
  h1: {
    fontSize: Theme.fontSizeDefault * 3.998,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: Theme.fontSizeDefault * 2.827,
    fontWeight: 'bold'
  },
  h3: {
    fontSize: Theme.fontSizeDefault * 1.999,
    fontWeight: 'bold'
  },
  h4: {
    fontSize: Theme.fontSizeDefault * 1.414,
    fontWeight: 'bold'
  },
  h5: {
    fontSize: Theme.fontSizeDefault,
    fontWeight: 'bold'
  },
  small: {
    fontSize: Theme.fontSizeDefault * 0.707
  }
}

Type.propTypes = {
  variant: PropTypes.oneOf(types)
}

export default Type;
