import React, {Component, useState} from 'react';
import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {data} from './data/data';
// import {NavigationContainer} from '@react-navigation/native';
// import BottomTab from './BottomTab';
// import MainContainer from './navigation/MainContainer';

const App = () => {
  const [liked, setLiked] = useState(false);
  const [chated, setChated] = useState(false);

  const renderItem = ({item, index}) => {
    console.log('랜더 아이템 목록입니다', item);
    return (
      <View>
        <View style={styles.content}>
          <TouchableOpacity style={styles.contentBox}>
            <View>
              <Image
                source={{uri: item.img}}
                style={{
                  width: 120,
                  height: 110,
                  borderRadius: 100 / 10,
                }}
              />
            </View>
            <View style={{paddingLeft: 15, flexShrink: 1}}>
              <Text
                style={{
                  fontSize: 19,
                  lineHeight: 23,
                  flexShrink: 1,
                }}>
                {item.title}
              </Text>
              <Text style={{color: 'grey', lineHeight: 25}}>{item.time}</Text>
              <Text style={{fontSize: 18, fontWeight: '700', lineHeight: 35}}>
                {item.price}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Pressable
                  onPress={() => setLiked(liked + 1)}
                  style={{flexDirection: 'row'}}>
                  <Icon
                    name={liked ? 'heart' : 'heart-outline'}
                    size={19}
                    color={liked ? 'grey' : 'black'}
                  />
                  <Text>{liked}</Text>
                </Pressable>
                <Pressable
                  onPress={() => setChated(chated + 1)}
                  style={{flexDirection: 'row', paddingLeft: 13}}>
                  <Icon
                    name={liked ? 'chatbubble' : 'chatbubble-outline'}
                    size={19}
                    color={liked ? 'grey' : 'black'}
                  />
                  <Text>{chated}</Text>
                </Pressable>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <View></View>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Icon style={styles.icon} size={23} name="search-outline" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon style={styles.icon} size={23} name="menu-outline" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  style={styles.icon}
                  size={23}
                  name="notifications-outline"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
      </ScrollView>

      {/* <NavigationContainer>
        <BottomTab />
      </NavigationContainer> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 60,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#c4c4c4',
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    width: 150,
    height: 45,
    borderColor: 'red',
    borderWidth: 1,
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginLeft: 10,
    color: 'black',
  },

  content: {
    flex: 1,
  },

  contentBox: {
    flexDirection: 'row',
    height: 135,
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 1,
    marginHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },

  footer: {
    height: 55,
    borderTopWidth: 1,
    borderTopColor: '#c4c4c4',
  },
});

export default App;
