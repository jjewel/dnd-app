import React from 'react';

import { PrimaryButton, ScreenWrapper } from '../components/atoms';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScreenWrapper>
        <PrimaryButton title="CREATE CHARACTER" />
      </ScreenWrapper>
    );
  }
}
