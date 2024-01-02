import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import {View, Text, Button, StyleSheet} from 'react-native';
import SignOut from '../Signout/SignoutScreen';
import UserPanel from '../UserPanel/UserPanelScreen';
import TimelineScreen from '../Timeline/TimelineScreen';
import SettingScreen from '../Setting/SettingScreen';
import ProfileScreen from '../Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

function HomeScreen({navigation, route}) {
  //   const {name} = route.params;

  //   console.log(name);
  return (
    <Tab.Navigator initialRouteName="Timeline">
      <Tab.Screen
        name="Timeline"
        component={TimelineScreen}
        options={{
          headerShown: false,

          tabBarLabel: 'Timeline',
          tabBarIcon: ({color, size}) => (
            <Icon name="profile" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User Panel"
        component={UserPanel}
        options={{
          headerShown: false,

          tabBarLabel: 'User Panel',
          tabBarIcon: ({color, size}) => (
            <Icon name="profile" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => (
            <Icon name="setting" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,

          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    // <View>
    //   <UserPanel/>
    // </View>
    // <Drawer.Navigator>
    //   <Drawer.Screen
    //     name="SignOut"
    //     component={SignOut}
    //     options={{headerShown: 'false'}}
    //   />
    //   <Drawer.Screen name="UserPanel" component={UserPanel} />
    // </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;

// <View style={styles.container}>
//   <Text style={styles.text}>Home Screen</Text>
//   <Button
//     title="Go to Signup"
//     onPress={() => navigation.navigate('SignUp', {name: 'Vishwas'})}
//   />
//   <Text style={styles.text}>Result: {route.params?.result}</Text>
// </View>

{
  /* <Drawer.Navigator initialRouteName="User Panel">
<Drawer.Screen name="User Panel" component={UserPanel} />
<Drawer.Screen name="SignOut" component={SignOut} />
</Drawer.Navigator> */
}

// const TestScreen = () => {
//   return (
//     <View>
//       <Text>This is Test</Text>
//     </View>
//   );
// };
// const TestScreen2 = () => {
//   return (
//     <View>
//       <Text>This is another Test</Text>
//     </View>
//   );
// };

{
  /* <Tab.Screen name="SignOut" component={SignOut} /> */
}
