import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { BackHandler } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, Text, Label, Item, Button, Content, Picker, Form } from 'native-base';
import DatePicker from 'react-native-datepicker';

class AccomodationForm extends Component {

  constructor(props) {
     super(props);
     this.state = {
       selected: 'Kolkas',
       checkindate: new Date(),
       checkoutdate: new Date()
     };
   }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid());
  }

  backAndroid() {
        Actions.Home();
        return true;
  }

   render() {
     return (
       <Container>
         <Content>

           <Form style={styles.formStyle}>
            <Label style={styles.labelStyle}>Accomodation Place : </Label>

              <Picker
               style={styles.pickerStyle}
               mode="dropdown"
               selectedValue={this.state.selected}
               onValueChange={(selected) => { this.setState({ selected }); }}
              >
               <Item label="Kolkas" value="Kolkas" />
               <Item label="Semados" value="Semados" />
               <Item label="Shananur" value="Shananur" />
             </Picker>
           </Form>

           <Form style={styles.formStyle}>
                <Label style={styles.labelStyle}>Check In Date : </Label>
                <DatePicker
                 style={styles.DatePickerStyle}
                 date={this.state.checkindate}
                 mode="date"
                 placeholder="select date"
                 format="DD-MM-YYYY"
                 minDate={this.state.checkindate}
                 confirmBtnText="Confirm"
                 cancelBtnText="Cancel"
                 customStyles={styles.customStyles}
                 onDateChange={(checkindate) => { this.setState({ checkindate }); }}
            />
         </Form>

          <Form style={styles.formStyle}>
            <Label style={styles.labelStyle}>Check Out Date : </Label>
            <DatePicker
             style={styles.DatePickerStyle}
             date={this.state.checkoutdate}
             mode="date"
             placeholder="select date"
             format="DD-MM-YYYY"
             minDate={this.state.checkoutdate}
             confirmBtnText="Confirm"
             cancelBtnText="Cancel"
             customStyles={styles.customStyles}
             onDateChange={(checkoutdate) => { this.setState({ checkoutdate }); }}
        />
     </Form>

      <Button
        rounded
        onPress={() => Actions.AccomodationForm2({
        place: this.state.selected,
        checkin: this.state.checkindate,
        chechout: this.state.checkoutdate })} iconRight style={styles.buttonStyle}>
        <Text>Next</Text>
             <Icon color='white' name='chevron-right' />
     </Button>

    </Content>
       </Container>
    );
  }
}
const styles = {
pickerStyle: {
  padding: 0,
  width: 150,
  borderColor: 'black',
  color: 'black'
},
labelStyle: {
  color: 'black',
  marginLeft: 10,
  marginBottom: 1,
},
DatePickerStyle: {
  width: 170
},
customStyles: {
  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 3,

},
  dateInput: {
    borderColor: 'black',
    borderRadius: 5
} },
buttonStyle: {
    backgroundColor: '#1E861F',
  //marginLeft: 100
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 20
},
formStyle: {
  justifyContent: 'space-between',
   flexDirection: 'row',
   borderColor: 'black',
   alignItems: 'center',
   marginBottom: 20,
   padding: 10

}
};
export default AccomodationForm;
