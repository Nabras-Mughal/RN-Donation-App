// import {View, Text, Button, StyleSheet, Alert} from 'react-native';
// import auth from '@react-native-firebase/auth';

// function SignOut({navigation}) {
//   const handleSignOut = async () => {
//     try {
//       await auth().signOut();
//       Alert.alert('Signed Out Successfully');
//       navigation.navigate('SignUp');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   <View style={styles.container}>
//     <Text style={{color: 'red'}}>Sign Out</Text>
//     <Button title="Sign Out" onPress={handleSignOut} />
//   </View>;
// }

// export default SignOut;

import React from 'react';
import auth from '@react-native-firebase/auth';

import {View, Text, Button, StyleSheet, Alert} from 'react-native';

function SignOut({navigation}) {
  const handleSignOut = async () => {
    try {
      await auth().signOut();
      Alert.alert('Signed Out Successfully');
      navigation.navigate('SignUp');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>Sign Out</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 14,
  },
});

export default SignOut;
