import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/components/Home';
import info from './src/components/info';
import Gallery from './src/components/Gallery';
import Accomodation from './src/components/Accomodation';
import howtoreach from './src/components/howtoreach';
import SafariBooking from './src/components/SafariBooking';
import NightSafariBookingForm from './src/components/NightSafariBookingForm';
import Rules from './src/components/Rules';
import MachaanBooking from './src/components/MachaanBooking';
import Sanctuary from './src/components/Sanctuary';
import ThingsToDo from './src/components/ThingsToDo';
import Events from './src/components/Events';
import Contact from './src/components/Contact';
import DoYouKnow from './src/components/DoYouKnow';
import VideoGallery from './src/components/VideoGallery';
import YoutubeViewer from './src/components/YoutubeViewer';
import MachaanBookingForm from './src/components/MachaanBookingForm';
import MachaanBookingForm2 from './src/components/MachaanBookingForm2';


class RouterComponent extends Component {

   render() {
     return (
      <Router>

      <Scene>

      <Scene
        key="Home"
        hideNavBar
        titleStyle={{ color: 'white' }}
        leftButtonImage={require('./src/img/lines.png')}
        leftButtonIconStyle={styles.leftButton}
        onLeft={() => this.openDrawer()}
        navigationBarStyle={styles.navbarStyle}
        title="Magical Melghat"
        component={Home}
      />

      <Scene
        key="AccomodationForm"
        //hideNavBar
        titleStyle={{ color: 'white' }}
        backButtonImage={require('./src/img/back.png')}
        //leftButtonImage={require('./src/img/lines.png')}
        //leftButtonIconStyle={styles.leftButton}
        //onLeft={() => this.openDrawer()}
        navigationBarStyle={styles.navbarStyle}
        title="Accomodation"
        component={Accomodation}
      />

      <Scene
        key="SafariBooking"
        titleStyle={{ color: 'white' }}
        backButtonImage={require('./src/img/back.png')}
        //leftButtonImage={require('./src/img/lines.png')}
        //leftButtonIconStyle={styles.leftButton}
        //onLeft={() => this.openDrawer()}
        navigationBarStyle={styles.navbarStyle}
        title="Safari Booking"
        component={SafariBooking}
      />

      <Scene
        key="MachaanBooking"
        titleStyle={{ color: 'white' }}
        backButtonImage={require('./src/img/back.png')}
        //leftButtonImage={require('./src/img/lines.png')}
        //leftButtonIconStyle={styles.leftButton}
        //onLeft={() => this.openDrawer()}
        navigationBarStyle={styles.navbarStyle}
        title="Machaan Booking"
        component={MachaanBooking}
      />

      <Scene
        key="MachaanBookingForm"
        titleStyle={{ color: 'white' }}
        backButtonImage={require('./src/img/back.png')}
        //leftButtonImage={require('./src/img/lines.png')}
        //leftButtonIconStyle={styles.leftButton}
        //onLeft={() => this.openDrawer()}
        navigationBarStyle={styles.navbarStyle}
        title="Machaan Booking"
        component={MachaanBookingForm}
      />

      <Scene
        key="MachaanBookingForm2"
        titleStyle={{ color: 'white' }}
        backButtonImage={require('./src/img/back.png')}
        //leftButtonImage={require('./src/img/lines.png')}
        //leftButtonIconStyle={styles.leftButton}
        //onLeft={() => this.openDrawer()}
        navigationBarStyle={styles.navbarStyle}
        title="Machaan Booking"
        component={MachaanBookingForm2}
      />

        <Scene
            key="NightSafariBookingForm"
              titleStyle={{ color: 'white' }}
              backButtonImage={require('./src/img/back.png')}
              navigationBarStyle={styles.navbarStyle}
              title="Night Safari Booking"
              component={NightSafariBookingForm}
        />

        <Scene
            key="DoYouKnow"
              titleStyle={{ color: 'white' }}
              backButtonImage={require('./src/img/back.png')}
              navigationBarStyle={styles.navbarStyle}
              title="Do You Know"
              component={DoYouKnow}
        />

      <Scene
      key="howtoreach"
        titleStyle={{ color: 'white' }}
        backButtonImage={require('./src/img/back.png')}
        navigationBarStyle={styles.navbarStyle}
        title="How To Reach"
        component={howtoreach}
      />

      <Scene
      key="info"
      //hideNavBar
      backButtonImage={require('./src/img/back.png')}
      titleStyle={{ color: 'white' }}
      navigationBarStyle={styles.navbarStyle}
      title="About Melghat"
      component={info}
      />

      <Scene
      key="VideoGallery"
      hideNavBar
      component={VideoGallery}
      />

      <Scene
      key="YoutubeViewer"
      backButtonImage={require('./src/img/back.png')}
      titleStyle={{ color: 'white' }}
      navigationBarStyle={styles.navbarStyle}
      component={YoutubeViewer}
      />

       <Scene
            key="Rules"
            titleStyle={{ color: 'white' }}
            backButtonImage={require('./src/img/back.png')}
            navigationBarStyle={styles.navbarStyle}
            title="Rules & Regulations"
            component={Rules}
        />

      <Scene
      key="Gallery"
      titleStyle={{ color: 'white' }}
      backButtonImage	={require('./src/img/back.png')}
      //hideNavBar
    //  leftButtonImage={require('./src/img/lines.png')}
      //leftButtonIconStyle={styles.leftButton}
      //onLeft={() => console.log('vvhv')}
      navigationBarStyle={styles.navbarStyle}
      title="Gallery"
      component={Gallery}
      />
      <Scene
           key="Sanctuary"
           titleStyle={{ color: 'white' }}
           backButtonImage={require('./src/img/back.png')}
           navigationBarStyle={styles.navbarStyle}
           title="Other Sanctuary"
           component={Sanctuary}
       />

       <Scene
            key="ThingsToDo"
            titleStyle={{ color: 'white' }}
            backButtonImage={require('./src/img/back.png')}
            navigationBarStyle={styles.navbarStyle}
            title="Things To Do"
            component={ThingsToDo}
        />

        <Scene
             key="Events"
             titleStyle={{ color: 'white' }}
             backButtonImage={require('./src/img/back.png')}
             navigationBarStyle={styles.navbarStyle}
             title="Events"
             component={Events}
         />

        <Scene
             key="Contact"
             titleStyle={{ color: 'white' }}
             backButtonImage={require('./src/img/back.png')}
             navigationBarStyle={styles.navbarStyle}
             title="Contact"
             component={Contact}
         />

      </Scene>

    </Router>
    );
  }
}
const styles = {
  navbarStyle: {
    backgroundColor: '#1E861F'
  },
  leftButton: {
    height: 40,
    width: 40
  }
};

export default RouterComponent;
