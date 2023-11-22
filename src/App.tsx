import React, { FC } from 'react';
import { View } from 'react-native';

import { Typography } from './view/components/Typography';

const App: FC = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Typography color="dark" variant="l1">
        Hello world
      </Typography>
    </View>
  );
};

export default App;
