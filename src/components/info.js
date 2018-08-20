import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity, platform, BackHandler } from 'react-native';
import { Container, Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';
import { History, About, Forts, Geography, Admin } from './infoComponents';


class info extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
 }

 componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid());
 }

 backAndroid() {
   Actions.replace('Home');
   return true;
 }
  render() {
    return (
<Container style={{ marginTop: 2 }}>
   <Tabs
     tabContainerStyle={{ padding: 0, height: 50 }} renderTabBar={() =>
     <ScrollableTab tabsContainerStyle={{ backgroundColor: '#1E861F' }} />}>
      <Tab
      activeTabStyle={{ backgroundColor: '#1E861F' }}
      tabStyle={{ backgroundColor: '#1E861F' }} heading="About">
                 <About />
      </Tab>

      <Tab
      activeTabStyle={{ backgroundColor: '#1E861F' }}
      tabStyle={{ backgroundColor: '#1E861F' }} heading="History">
                 <History />
      </Tab>

      <Tab
      activeTabStyle={{ backgroundColor: '#1E861F' }}
      tabStyle={{ backgroundColor: '#1E861F' }} heading="Forts in Melghat">
                 <Forts />
      </Tab>

      <Tab
      activeTabStyle={{ backgroundColor: '#1E861F' }}
      tabStyle={{ backgroundColor: '#1E861F' }} heading="Geography">
                 <Geography />
      </Tab>

     <Tab
     activeTabStyle={{ backgroundColor: '#1E861F' }}
     tabStyle={{ backgroundColor: '#1E861F' }} heading="Administration">
                 <Admin />
    </Tab>

    </Tabs>
  </Container>
    );
  }
}
export default info;
