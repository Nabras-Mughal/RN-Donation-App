// import {validatePathConfig} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/database';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  Button,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {RadioButton} from 'react-native-paper';

function DonateRequestScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const options = ['Education', 'Food', 'Money', 'Other'];

  const [userData, setUserData] = useState({
    name: '',
    contact: '',
    cnic: '',
    gender: false,
    options: 'Education',
    details: '',
  });

  function formValidate() {
    let errors = {};
    if (!userData.name) errors.name = 'Name is Required';
    if (!userData.cnic) errors.cnic = 'CNIC No is Required';
    if (!userData.contact) errors.contact = 'Contact is Required';
    if (!userData.details) errors.details = 'Details are Required';

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = async () => {
    // try {
    if (formValidate()) {
      setIsLoading(true);
      // TO:DO : Partition Data in Database according to Donate | Request Code //
      const reference = firebase
        .app()
        .database(
          'https://donation-app-a1158-default-rtdb.asia-southeast1.firebasedatabase.app',
        )
        .ref('/Users/');

      const userRef = reference.push();

      await userRef.set(userData);

      Alert.alert('Success', 'Data Added successfully!', [{text: 'OK'}]);
      //   console.log(JSON.stringify(userData, null, 2));
      setUserData({
        name: '',
        contact: '',
        cnic: '',
        gender: false,
        options: 'Education',
        details: '',
      });
      setIsLoading(false);
    }
    // } catch (error) {
    //   if ((error.name = 'firestore/permission-denied')) {
    //     console.error('Provide Authentic Credentials');
    //   }
    //   console.error(error);
    // }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ActivityIndicator animating={isLoading} size="large" />
      {!isLoading && (
        <View style={styles.form}>
          <Text style={styles.title}>Request Donate</Text>
          <ScrollView>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              inputMode="text"
              autoComplete="name"
              onChangeText={name => setUserData({...userData, name: name})}
              value={userData.name}
            />
            {errors.name ? (
              <Text style={styles.errorText}>{errors.name}</Text>
            ) : null}
            <Text style={styles.label}>Contact</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Contact No"
              inputMode="numeric"
              autoComplete="off"
              onChangeText={contact =>
                setUserData({...userData, contact: contact})
              }
              value={userData.contact}
            />
            {errors.contact ? (
              <Text style={styles.errorText}>{errors.contact}</Text>
            ) : null}
            <Text style={styles.label}>CNIC No</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter CNIC No"
              inputMode="numeric"
              autoComplete="off"
              onChangeText={cnic => setUserData({...userData, cnic: cnic})}
              value={userData.cnic}
            />
            {errors.cnic ? (
              <Text style={styles.errorText}>{errors.cnic}</Text>
            ) : null}
            <View style={styles.gnder}>
              <TouchableOpacity
                onPress={() => setUserData({...userData, gender: true})}
                style={styles.option}>
                <Text
                  style={[
                    styles.optionText,
                    userData.gender && styles.selectedOption,
                  ]}>
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setUserData({...userData, gender: false})}
                style={styles.option}>
                <Text
                  style={[
                    styles.optionText,
                    !userData.gender && styles.selectedOption,
                  ]}>
                  Female
                </Text>
              </TouchableOpacity>
            </View>
            <RadioButton.Group
              onValueChange={value =>
                setUserData({...userData, options: value})
              }
              value={userData.options}>
              <RadioButton.Item
                label="Education"
                value="Education"
                color="#2786d9"
                uncheckedColor="grey"
              />
              <RadioButton.Item
                label="Food"
                value="Food"
                color="#2786d9"
                uncheckedColor="grey"
              />
              <RadioButton.Item
                label="Money"
                value="Money"
                color="#2786d9"
                uncheckedColor="grey"
              />
              <RadioButton.Item
                label="Others"
                value="Others"
                color="#2786d9"
                uncheckedColor="grey"
              />
            </RadioButton.Group>
            <TextInput
              onChangeText={details =>
                setUserData({...userData, details, details})
              }
              value={userData.details}
              inputMode={userData.options == 'Money' ? 'decimal' : 'text'}
              style={(styles.input, styles.multilineText)}
              placeholder="Details"
              multiline={true}
            />
            {errors.details ? (
              <Text style={styles.errorText}>{errors.details}</Text>
            ) : null}
            <Button
              title="Submit"
              style={styles.submitBtn}
              onPress={handleSubmit}
            />
          </ScrollView>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  form: {
    minHeight: 350,
    backgroundColor: 'white',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  btn: {
    height: 15,
    color: 'tan',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gnder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 25,
    marginVertical: 10,
  },
  option: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
    width: 130,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  selectedOption: {
    color: '#007bff',
  },
  multilineText: {
    minHeight: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  submitBtn: {
    marginTop: 20,
  },
});

export default DonateRequestScreen;

//   const [checked, setChecked] = useState('Education');
//   const [open, setOpen] = useState(false);
//   const [isDonationScreen, setIsDonationScreen] = useState(true);

// rules_version = '2';

// service cloud.firestore {

//   match /databases/{database}/documents {

//     match /{document=**} {

//       allow read, write: if

//           request.time < timestamp.date(2024, 1, 30);

//     }

//   }

// }
