import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Avatar} from 'react-native-paper';
import {useEffect, useState} from 'react';

function ProfileScreen({navigation}) {
  const [userData, setUserData] = useState();
  const [userEmail, setUserEmail] = useState();
  
  const getUserCredential = async () => {
    const jsonValue = await AsyncStorage.getItem('userCredential');
    let value = JSON.parse(jsonValue);
    setUserData(value);
  };

  console.log(`############# Profile Log  #############`);
  useEffect(() => {
    getUserCredential();
  }, []);
  useEffect(() => {
    if (userData) {
      let Email = Object.values(userData)[1].email;
      setUserEmail(Email);
      console.log(Object.values(userData)[1].email);
    }
  }, [userData]);

  console.log(userEmail);

  const handleSignOut = async () => {
    try {
      await auth().signOut();
      Alert.alert('LogOut Successfully');
      navigation.navigate('SignUp');
    } catch (error) {
      console.error(error);
    }
  };
  let userName;
  if (userEmail) {
    userName = userEmail.split('@')[0];
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileData}>
        <Avatar.Icon
          icon="account"
          size={72}
          color="#fff"
          style={styles.avatar}
        />
        {userData && <Text style={styles.useMail}>{userName}</Text>}
        <Button title="Logout" onPress={handleSignOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#7ebdfc',
    borderRadius: 16, // Adjust for desired roundness
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  useMail: {
    fontSize: 32,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  profileData: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: '#e6e6e6',
    shadowColor: '#000', // Adjust color as needed
    shadowOffset: {width: 1, height: 8}, // Offset the shadow slightly down
    shadowOpacity: 0.2, // Control shadow intensity
    shadowRadius: 3, // Soften shadow edges
    elevation: 2,
  },
});

export default ProfileScreen;

// async function getData() {
//   const jsonValue = await AsyncStorage.getItem('userCredential');

//   // console.log(JSON.parse(jsonValue)['user']['email']);
//   console.log(JSON.parse(jsonValue));
// }

// const getUserCredential = async () => {
//   try {
//     let jsonValue = await AsyncStorage.getItem('userCredential');
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getUserCredential = async () => {
//   try {
//     let jsonValue = await AsyncStorage.getItem('userCredential');
//     // console.log(jsonValue);
//     // console.log(JSON.parse(jsonValue));
//     // let uData = JSON.parse(jsonValue);
//     return JSON.parse(jsonValue);
//   } catch (e) {
//     console.error(e);
//   }
// };
