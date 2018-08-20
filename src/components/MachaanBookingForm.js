import React, { Component } from 'react';
import { ScrollView, BackHandler, TextInput, Picker } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Container, Text, Label, Item, Button, Content, Form } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { Card, CardSection } from './common';

const SQLite = require('react-native-sqlite-storage')

class MachaanBookingForm extends Component {

  constructor(props) {
     super(props);
     this.state = {
      record: null,
       machaanLocation: 'select',
       selectedDate: '30-04-2018',
       rate: '',
       firstName: '',
       middleName: '',
       lastName: '',
       Gender: 'male',
       dob: '',
       address: '',
       city: '',
       district: '',
       mobileNo: '',
       relativemobileNo: '',
       email: '',
       idType: '',
       idNo: '',
       petname: ''
     };
}

componentWillMount() {
  const db = SQLite.openDatabase({ name: 'MachaanBooking.db', createFromLocation: '~MachaanBooking.db', location: 'Library'}, this.openCB, this.errorCB);
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM pet WHERE owner=?', ['John'], (tx, results) => {
        console.log("Query completed");
        var len = results.rows.length;
        if (len > 0){
          var row = results.rows.item(0);
          this.setState({ petname: row.petname });
          console.log(this.state.petname);
        }
      });
  });
}

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid());
  }

  backAndroid() {
        Actions.MachaanBooking();
        return true;
  }

  render() {
    return (
      <ScrollView>
      <Card>
      <Text>values: {this.state.record}</Text>
       <CardSection>
        
        <Text style={styles.headingStyle}>
          Machaan Booking Details
        </Text>
       </CardSection>
       <Form style={styles.formStyle}>
        <Label style={styles.labelStyle}>Machaan Name	:</Label>

          <Picker
           style={styles.pickerStyle}
           mode="dropdown"
           selectedValue={this.state.selected}
           onValueChange={(machaanLocation) => { this.setState({ machaanLocation, rate: '1500' }); }}
          >
          <Item label="Select Machaan" value="select" />
           <Item label="Chikhaldara" value="Chikhaldara" />
           <Item label="Tarubanda" value="Tarubanda" />
           <Item label="Dhakana" value="Dhakana" />
           <Item label="Harisal" value="Harisal" />
           <Item label="Semadoh" value="Semadoh" />
           <Item label="Raipur" value="Raipur" />
           <Item label="Jarida" value="Jarida" />
           <Item label="Hatru" value="Hatru" />
           <Item label="Chaurakund" value="Chaurakund" />
           <Item label="Shahanur" value="Shahanur" />
           <Item label="Gullarghat" value="Gullarghat" />
           <Item label="Van" value="Van" />
           <Item label="Sonala" value="Sonala" />
           <Item label="Shivpur" value="Shivpur" />
           <Item label="Botha (Dnyanganga WLS)" value="Botha (Dnyanganga WLS)" />
           <Item label="Wagah (Katepurna WL)" value="Wagah (Katepurna WL)" />


         </Picker>
       </Form>


       <Form style={styles.formStyle}>
        <Label style={styles.labelStyle}>Booking Date: </Label>

          <Picker
           style={styles.pickerStyle}
           mode="dropdown"
           selectedValue={this.state.selectedDate}
           onValueChange={(selectedDate) => { this.setState({ selectedDate, rate: '1500`' }); }}
          >
           <Item label="30/04/2018" value="30/04/2018" />

         </Picker>
       </Form>

       <Form style={styles.formStyle}>
        <Label style={styles.labelStyle}>Rate: </Label>

       <TextInput
        style={{ color: 'black', fontSize: 18, marginRight: 150 }}
        onChangeText={(rate) => this.setState({ rate })}
        value={this.state.rate}
        editable={false}
        placeholder=""
        placeholderTextColor="black"
        underlineColorAndroid="#1E861F"
        />
        </Form>
      </Card>

      <Card>
      <CardSection>
      <Text style={styles.headingStyle}>Personal Information</Text>
      </CardSection>

      <Label
      style={{ color: 'black', marginLeft: 20, marginBottom: 1, marginTop: 10 }}>
      Name :
      </Label>

       <Form style={styles.formStyle}>
        <TextInput
         style={{ color: 'black', width: 120, marginLeft: 20 }}
         onChangeText={(firstName) => this.setState({ firstName })}
         value={this.state.firstName}
         placeholder="First Name"
         underlineColorAndroid="#1E861F"
       />
       <TextInput
        style={{ color: 'black', width: 120 }}
        onChangeText={(middleName) => this.setState({ middleName })}
        value={this.state.middleName}
        placeholder="Middle Name"
        underlineColorAndroid="#1E861F"
      />
      <TextInput
       style={{ color: 'black', width: 120 }}
       onChangeText={(lastName) => this.setState({ lastName })}
       value={this.state.lastName}
       placeholder="Last Name"
       underlineColorAndroid="#1E861F"
     />
       </Form>

       <Form style={styles.formStyle}>
        <Label style={styles.labelStyle}>Gender :</Label>

          <Picker
           style={styles.pickerStyle}
           mode="dropdown"
           selectedValue={this.state.Gender}
           onValueChange={(Gender) => { this.setState({ Gender }); }}
          >
           <Item label="Male" value="male" />
           <Item label="Female" value="female" />
           <Item label="Other" value="other" />

         </Picker>
       </Form>

       <Form style={styles.formStyle}>
        <Label style={styles.labelStyle}>Date of Birth : </Label>

        <DatePicker
         style={styles.DatePickerStyle}
         date={this.state.dob}
         mode="date"
         placeholder="Date of Birth"
         format="DD-MM-YYYY"
         minDate={this.state.checkoutdate}
         confirmBtnText="Confirm"
         cancelBtnText="Cancel"
         customStyles={styles.customStyles}
         onDateChange={(dob) => { this.setState({ dob }); }}
         />
       </Form>

     <Label
       style={{ color: 'black', marginLeft: 20, marginBottom: 1, marginTop: 15 }}>
       Address :
     </Label>

     <Form>
       <TextInput
        style={{ color: 'black', marginLeft: 30, marginRight: 20 }}
        onChangeText={(address) => this.setState({ address })}
        value={this.state.address}
        multiline
        //placeholder="Last Name"
        underlineColorAndroid="#1E861F"
        />

      <TextInput
       style={{ color: 'black', width: 200, marginLeft: 30, marginRight: 60 }}
       onChangeText={(city) => this.setState({ city })}
       value={this.state.city}
       placeholder="City"
       underlineColorAndroid="#1E861F"
       />

      <TextInput
       style={{ color: 'black', width: 200, marginLeft: 30, marginRight: 60 }}
       onChangeText={(district) => this.setState({ district })}
       value={this.state.district}
       placeholder="District"
       underlineColorAndroid="#1E861F"
       />

     <TextInput
        style={{ color: 'black', width: 200, marginLeft: 30, marginRight: 60 }}
        onChangeText={(mobileNo) => this.setState({ mobileNo })}
        keyboardType="phone-pad"
        value={this.state.mobileNo}
        placeholder="Mobile No."
        underlineColorAndroid="#1E861F"
        />

        <TextInput
           style={{ color: 'black', width: 200, marginLeft: 30, marginRight: 60 }}
           onChangeText={(relativemobileNo) => this.setState({ relativemobileNo })}
           keyboardType="phone-pad"
           value={this.state.relativemobileNo}
           placeholder="Mobile No. of Relative/ Friend"
           underlineColorAndroid="#1E861F"
           />

      <TextInput
           style={{ color: 'black', width: 200, marginLeft: 30, marginRight: 60 }}
           onChangeText={(email) => this.setState({ email })}
           value={this.state.email}
           placeholder="Email Id"
           keyboardType="email-address"
           underlineColorAndroid="#1E861F"
      />
     </Form>

     <Form style={styles.formStyle}>
      <Label style={styles.labelStyle}>ID Type</Label>

        <Picker
         style={styles.pickerStyle}
         mode="dropdown"
         selectedValue={this.state.idType}
         onValueChange={(idType) => { this.setState({ idType }); }}
        >
         <Item label="Aadhar" value="Aadhar" />
         <Item label="PAN Card" value="PanCard" />
         <Item label="Driving Licence" value="DrivingLicence" />
         <Item label="Employee Card" value="EmployeeCard" />
         <Item label="Other ID" value="otherID" />
       </Picker>
      </Form>

      <Form>
       <TextInput
            style={{ color: 'black', width: 180, marginLeft: 30, marginRight: 60 }}
            onChangeText={(idNo) => this.setState({ idNo })}
            value={this.state.idNo}
            placeholder="ID NO"
            //keyboardType="email-address"
            underlineColorAndroid="#1E861F"
        />
     </Form>

     <Button
       rounded
       onPress={() => Actions.MachaanBookingForm2({
       firstName: this.state.firstName,
       lastName: this.state.lastName,
       location: this.state.machaanLocation,
       mobile: this.state.mobileNo,
       email: this.state.email,
       fare: this.state.rate

      })} iconRight style={styles.buttonStyle}>
       <Text>Next</Text>
            <Icon color='white' name='chevron-right' />
    </Button>
      </Card>
  </ScrollView>
    );
  }
}

const styles = {
pickerStyle: {
  padding: 0,
  width: 180,
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
    borderColor: '#1E861F',
    borderRadius: 5
} },
buttonStyle: {
    backgroundColor: '#1E861F',
  //marginLeft: 100
    justifyContent: 'center',
    alignSelf: 'center',
    //borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 10
},
formStyle: {
  justifyContent: 'space-between',
   flexDirection: 'row',
   borderColor: 'black',
   alignItems: 'center',
   padding: 10

},
headingStyle: {
  color: 'white',
  fontSize: 16,
  padding: 5
}
};
export default MachaanBookingForm;
