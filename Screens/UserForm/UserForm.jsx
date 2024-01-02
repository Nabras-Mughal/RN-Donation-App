//TO:DO : Convert Bottom Tab to Top Tab Naviagtion
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import DonateRequestScreen from '../DonateRequestForm/DonateRequestForm';

const Tab = createMaterialTopTabNavigator();

function DonationScreen() {
  return (
    <View style={styles.container}>
      <Text> Donation</Text>
    </View>
  );
}

function RequestScreen() {
  return (
    <View style={styles.container}>
      <Text>Request</Text>
    </View>
  );
}

const UserFormScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Donation" component={DonateRequestScreen} />
      <Tab.Screen name="Request" component={DonateRequestScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserFormScreen;
