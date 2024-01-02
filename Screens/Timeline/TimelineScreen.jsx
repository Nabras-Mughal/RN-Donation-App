import {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Video from 'react-native-video';

import {Avatar, Button, Card, FAB} from 'react-native-paper';
import {firebase} from '@react-native-firebase/database';

function TimelineScreen({navigation}) {
  const [timelineData, setTimelineData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchingData() {
      const reference = await firebase
        .app()
        .database(
          'https://donation-app-a1158-default-rtdb.asia-southeast1.firebasedatabase.app',
        )
        .ref('Admin/')
        .once('value')
        .then(snapshot => {
          let data = snapshot.val();
          data = Object.values(data);
          setTimelineData(data);
          console.log(data);
        });
      setIsLoading(false);
    }
    fetchingData();
  }, []);

  //   console.log(JSON.stringify(Object.values(timelineData), null, 2));
  let key1 = JSON.stringify(Object.keys(timelineData), null, 2);
  // console.log(JSON.stringify(Object.keys(timelineData), null, 2));
  let data2 = JSON.stringify(Object.values(timelineData), null, 2);
  // console.log(data2);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      subtitle: 'Some SubTitle Content',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      subtitle: 'Some SubTitle Content',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      subtitle: 'Some SubTitle Content',
    },
  ];

  const MyComponent = ({title, subtitle}) => (
    <Card>
      <Card.Title
        title={title}
        // subtitle={subtitle}
        //   left={LeftContent}
      />
      <Card.Content>
        <Text variant="titleLarge">{subtitle}</Text>
      </Card.Content>
      <Card.Cover
        style={{
          width: '100%',
          height: 200,
        }}
        source={{uri: 'https://picsum.photos/200/300'}}
      />
      <Card.Actions>
        <Button>Like</Button>
        <Button>Cancel</Button>
      </Card.Actions>
    </Card>
  );

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      {isLoading ? (
        <ActivityIndicator size="large" animating={isLoading} />
      ) : (
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <MyComponent title={item.title} subtitle={item.subtitle} />
          )}
          keyExtractor={item => item.id}
        />

        /* // <Card>
        //   <Card.Title title="Card Title" subtitle="Card Subtitle" />
        //   <Card.Cover source={{uri: 'https://picsum.photos/700'}} />

        //   <Card.Actions>
        //     <Button>Like</Button>
        //     <Button>Share</Button>
        //   </Card.Actions>
        // </Card> */
      )}
      {/* </ScrollView> */}
      <FAB
        icon="plus"
        style={styles.fab}
        mode="elevated"
        color="white"
        onPress={() => navigation.navigate('userForm')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  fab: {
    color: 'blue',
    position: 'absolute',
    margin: 26,
    right: 0,
    bottom: 0,
  },
});

export default TimelineScreen;
