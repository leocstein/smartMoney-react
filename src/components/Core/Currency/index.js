import React from 'react';
import {View, Text} from 'react-native';

import NuberFormat from 'react-number-format';

const Currency = ({value}) => {
  return (
    <NuberFormat
      value={parseFloat(value)}
      displayType={'text'}
      thousandSeparator={'.'}
      decimalSeparator={','}
      fixedDecimalScale={true}
      decimalScale={2}
      prefix={'R$ '}
      renderText={item => <Text>{item}</Text>}
    />
  );
};

export default Currency;
