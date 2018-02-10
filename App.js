
import React, { Component } from 'react';
import RouterComponent from './RouterComponent';
import FlashScreen from './src/components/FlashScreen';

export default class App extends Component<{}> {
  constructor(props) {
    console.disableYellowBox = true;
   super(props);
   this.state = {
   component: <FlashScreen />
};
}


componentDidMount() {
     this.timeoutHandle = setTimeout(() => {
          this.setState({ component: <RouterComponent /> })
     }, 1500);
}

componentWillUnmount() {
     clearTimeout(this.timeoutHandle);
}

  render() {
    return (
      this.state.component
    );
  }
}
