import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Theme from './../theme';

const types = ['normal', 'paragraph', 'h1', 'h2', 'h3', 'h4', 'h5', 'small'];

const Type = ({variant = types[0], style = {}, ...attrs}) => {
  if (types.indexOf(variant) < 0) {
    variant = types[0];
  }

  const mergedStyles = [
    styles[variant],
    style
  ];

  return <Text style={mergedStyles} {...attrs}>{attrs.children}</Text>
}

const styles = StyleSheet.create({
  normal: {
    fontSize: Theme.fontSizeDefault * Theme.typeScale.paragraph
  },
  paragraph: {
    fontSize: Theme.fontSizeDefault * Theme.typeScale.paragraph,
    marginBottom: 8
  },
  h1: {
    fontSize: Theme.fontSizeDefault * Theme.typeScale.h1,
    fontWeight: 'bold',
    lineHeight: (Theme.fontSizeDefault * Theme.typeScale.h1) * 1.2
  },
  h2: {
    fontSize: Theme.fontSizeDefault * Theme.typeScale.h2,
    fontWeight: 'bold',
    lineHeight: (Theme.fontSizeDefault * Theme.typeScale.h2) * 1.2
  },
  h3: {
    fontSize: Theme.fontSizeDefault * Theme.typeScale.h3,
    fontWeight: 'bold',
    lineHeight: (Theme.fontSizeDefault * Theme.typeScale.h3) * 1.2
  },
  h4: {
    fontSize: Theme.fontSizeDefault * Theme.typeScale.h4,
    fontWeight: 'bold',
    lineHeight: (Theme.fontSizeDefault * Theme.typeScale.h4) * 1.2
  },
  h5: {
    fontSize: Theme.fontSizeDefault * Theme.typeScale.h5,
    fontWeight: 'bold',
    lineHeight: (Theme.fontSizeDefault * Theme.typeScale.h5) * 1.2
  },
  small: {
    fontSize: Theme.fontSizeDefault * 0.707
  }
});

Type.propTypes = {
  variant: PropTypes.oneOf(types)
}

export default Type;
