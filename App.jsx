import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home/HomeScreen';
import AboutScreen from './Screens/About/AboutScreen';
import AuthenticationScreen from './Screens/Authenticate/Authentication';
import UserFormScreen from './Screens/UserForm/UserForm';
import {
  TermNotification,
  About,
  PrivacyPolicy,
} from './Screens/Setting/SettingScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [selectedValue, setSelectedValue] = useState('Donation');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authentication">
        <Stack.Screen
          name="Authentication"
          component={AuthenticationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="userForm"
          component={UserFormScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Terms & Notification"
          component={TermNotification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Privacy Policy"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AboutScreen"
          component={About}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
