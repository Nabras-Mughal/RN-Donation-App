import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import database from '@react-native-firebase/database';
import {Divider} from 'react-native-paper';
import {useEffect, useState} from 'react';
import {firebase} from '@react-native-firebase/database';

export const PrivacyPolicy = () => {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState({});

  useEffect(() => {
    async function fetchPPData() {
      const reference = await firebase
        .app()
        .database(
          'https://donation-app-a1158-default-rtdb.asia-southeast1.firebasedatabase.app',
        )
        .ref(`Privacy Policy`)
        .once('value')
        .then(snapshot => {
          setPrivacyPolicy(snapshot.val());
          setIsFetchingData(true);
          console.log(`### Fetched Privacy Policy Data ####`);
        });
    }
    fetchPPData();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        {isFetchingData ? (
          <>
            <Text style={styles.title}>{privacyPolicy.title}</Text>
            <Text>{privacyPolicy.subtitle}</Text>
            <Text style={{textAlign: 'justify', paddingHorizontal: 16}}>
              {privacyPolicy.body}
            </Text>
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </ScrollView>
    </View>
  );
};

export const TermNotification = () => {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [termAndNotification, setTermAndNotification] = useState({});

  useEffect(() => {
    async function fetchTANData() {
      const reference = await firebase
        .app()
        .database(
          'https://donation-app-a1158-default-rtdb.asia-southeast1.firebasedatabase.app',
        )
        .ref(`termsAndNotification`)
        .once('value')
        .then(snapshot => {
          setTermAndNotification(snapshot.val());
          setIsFetchingData(true);
          console.log(`### Fetched Notification Data ####`);
        });
    }
    fetchTANData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {isFetchingData ? (
          <>
            <Text style={styles.title}>{termAndNotification.title}</Text>
            <Text style={styles.subtitle}>{termAndNotification.subtitle}</Text>
            <Text style={{textAlign: 'justify', paddingHorizontal: 16}}>
              {termAndNotification.body}
            </Text>
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </ScrollView>
    </View>
  );
};

export const About = () => {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [about, setAbout] = useState({});

  useEffect(() => {
    async function fetchAboutData() {
      const reference = await firebase
        .app()
        .database(
          'https://donation-app-a1158-default-rtdb.asia-southeast1.firebasedatabase.app',
        )
        .ref(`About`)
        .once('value')
        .then(snapshot => {
          setAbout(snapshot.val());
          setIsFetchingData(true);
          console.log(`### Fetched About Data ####`);
        });
    }
    fetchAboutData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {isFetchingData ? (
          <>
            <Text style={styles.title}>{about.title}</Text>
            <Text style={styles.subtitle}>{about.subtitle}</Text>
            <Text style={{textAlign: 'justify', paddingHorizontal: 16}}>
              {about.body}
            </Text>
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </ScrollView>
    </View>
  );
};

function SettingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 40}}>
        {/* <ScrollView style={styles.scrollContainer}>  */}
        <TouchableOpacity
          style={styles.sections}
          onPress={() => {
            navigation.navigate('Terms & Notification');
          }}>
          <Text style={styles.sectionsText}>Terms & Notification</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          style={styles.sections}
          onPress={() => {
            navigation.navigate('Privacy Policy');
          }}>
          <Text style={styles.sectionsText}>Privacy Policy</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          style={styles.sections}
          onPress={() => {
            navigation.navigate('AboutScreen');
          }}>
          <Text style={styles.sectionsText}>About</Text>
        </TouchableOpacity>
        {/*    </ScrollView>  */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  sections: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 15,
  },
  sectionsText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    paddingTop: 10,
    marginHorizontal: 10,
    fontSize: 26,
  },
  subtitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default SettingScreen;

// <Button title="Terms & Notification" onPress={() => {}} />
// <Button title="Privacy Policy" onPress={() => {}} />
// <Button title="About" onPress={() => {}} />
