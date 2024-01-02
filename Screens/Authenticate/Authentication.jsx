import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Signup from '../Signup/signup';
import Login from '../Login/Login';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function AuthenticationScreen() {
  return (
    <Tab.Navigator initialRouteName="SignUp">
      <Tab.Screen
        name="SignUp"
        component={Signup}
        options={{
          headerShown: false,
          tabBarLabel: 'Sign Up',
          tabBarIcon: ({color, size}) => (
            <Icon name="login" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarLabel: 'Login',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AuthenticationScreen;
