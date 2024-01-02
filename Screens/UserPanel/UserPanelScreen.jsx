import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

function UserPanel({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Panel</Text>
      <Button
        style={styles.btn}
        title="Back to Home"
        onPress={() => navigation.navigate('SignUp')}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        mode="elevated"
        color='white'
        onPress={() => navigation.navigate("userForm")}
      />
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
    textAlign: 'center',
  },
  btn: {
    width: '80%',
  },
  fab: {
    color: 'blue',
    position: 'absolute',
    margin: 26,
    right: 0,
    bottom: 0,
  },
});

export default UserPanel;
