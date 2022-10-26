import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const data = [
    {
      userName: "Spider Man",
      avatar: require("./assets/images/spiderman.jpeg"),
    },
    {
      userName: "Captain",
      avatar: require("./assets/images/captain.jpg"),
    },

    {
      userName: "Iron Man",
      avatar: require("./assets/images/ironman.jpeg"),
    },
    {
      userName: "Strange",
      avatar: require("./assets/images/strange.jpg"),
    },
    {
      userName: "Wonder Woman",
      avatar: require("./assets/images/wonderwoman.jpg"),
    },
    {
      userName: "Wanda",
      avatar: require("./assets/images/wanda.jpg"),
    },
    {
      userName: "Yasuo",
      avatar: require("./assets/images/yasuo.jpg"),
    },
    {
      userName: "Super Girl",
      avatar: require("./assets/images/suppergirl.jpg"),
    },
    {
      userName: "Flash",
      avatar: require("./assets/images/flash.jpg"),
    },

    {
      userName: "Black Widow",
      avatar: require("./assets/images/blackwidow.jpeg"),
    },

  ]
  const renderListFindHistory = ({ item }) => {
    return <View style={{ padding: 15, justifyContent: "center", alignItems: "center" }}>
      <Image source={item.avatar} style={styles.img} />
      <Text style={{ color: "black", fontWeight: "600" }}>{item.userName}</Text>
    </View>
  }
  let friendsSuggest = [];
  for (let i = 0; i <= 15; i++) {
    friendsSuggest.push(data[Math.floor(Math.random() * data.length)])
  }
  const renderFriendsSuggest = () => {

    return friendsSuggest.map((data, index) => {
      return <View key={index} style={[styles.flexStyle, { justifyContent: "space-between" }, styles.friendContainer]}>
        <View style={[styles.flexStyle]}>
          <Image source={data.avatar} style={styles.img} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: "black", fontWeight: "600" }}>
              {data.userName}
            </Text>
            <Text>
              15 bạn chung
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.btnAddFriend}>
            <Text style={{ color: "black" }}>Kết bạn</Text>
          </TouchableOpacity>
        </View>
      </View>
    })
  }
  return (
    <View >
      <View>
        <View style={styles.titleContainer}>
          <Icon name="history" size={20} color="black" />
          <Text style={{ paddingLeft: 10, fontSize: 18, color: "black", fontWeight: "600" }}>Danh sách tìm kiếm gần đây</Text>
        </View>
        <View >
          <FlatList data={data}
            renderItem={renderListFindHistory}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View>
        <View style={styles.titleContainer}>
          <Icon name="user-friends" size={20} color="black" style={{ transform: [{ scaleX: -1 }] }} />
          <Text style={{ paddingLeft: 10, fontSize: 18, color: "black", fontWeight: "600" }}>Gợi ý kết bạn</Text>
        </View>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {renderFriendsSuggest()}

          </ScrollView>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  img: {
    width: 65,
    height: 65,
    borderRadius: 35,
  },
  flexStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  friendContainer: {
    backgroundColor: "#DCDCDC",
    height: 85,
    marginBottom: 15,
    marginLeft: 7,
    marginRight: 7,
    padding: 10,
    borderRadius: 5
  },
  btnAddFriend: {
    backgroundColor: "#BCBBFF",
    width: 75,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30
  }
})