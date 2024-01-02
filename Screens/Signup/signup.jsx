import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const storeUserCredentials = async value => {
  try {
    let JSONValue = JSON.stringify(value);
    await AsyncStorage.setItem('userCredential', JSONValue);
  } catch (error) {
    console.error(error);
  }
};

function Signup({navigation, route}) {
  const [isLoading, setIsLoading] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  // const {name} = route.params;
  // console.log(name);

  function formValidate() {
    let errors = {};
    if (!userCredentials.email) errors.email = 'Email is Reqired';
    if (!userCredentials.password) errors.password = 'Password is Reqired';

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = async () => {
    if (formValidate()) {
      try {
        setIsLoading(true);
        let userID = await auth().createUserWithEmailAndPassword(
          userCredentials.email,
          userCredentials.password,
        );
        storeUserCredentials(userID);
        setUserCredentials({email: '', password: ''});
        setErrors({});
        setIsLoading(false);
        navigation.navigate('Home', {name: 'coming form Sign Up'});

        // Alert.alert(
        //   'User Added Sucessfully',
        //   `${userCredentials.email} Signed up Sucessfully!`,
        // );
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        }

        console.error(error);
      }
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" animating={isLoading} />
      ) : (
        <View style={styles.form}>
          <Text style={styles.title}>Sign Up</Text>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              inputMode="email"
              autoComplete="email"
              onChangeText={userEmail =>
                setUserCredentials({...userCredentials, email: userEmail})
              }
              value={userCredentials.email}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              secureTextEntry
              value={userCredentials.password}
              onChangeText={userPassword =>
                setUserCredentials({...userCredentials, password: userPassword})
              }
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
            <Button style={styles.btn} title="Sign Up" onPress={handleSubmit} />
          </View>
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
    borderWidth: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'tan',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Signup;
