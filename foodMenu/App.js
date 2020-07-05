import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  Alert,
  TouchableOpacity,
  Button
} from 'react-native';


export default class App extends Component {

  constructor() {
    super();
    this.getListCall = this.getListCall.bind(this);
    this.GetListItem = this.GetListItem.bind(this);
    this.state = {
      dataSource: [],
    }
  }
  getListCall() {

    fetch("https://jsonblob.com/api/jsonBlob/ecfad985-bc66-11ea-8cae-99a0660a95d6")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson

        })
      })
      .catch(error => console.log(error))

  }


  GetListItem(name) {
    Alert.alert(name);
  }

  ItemSeparatorLine = () => {
    return (
      <View
        style={{ height: .5, width: "100%", backgroundColor: "#111a0b", }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>welcome to Petoo</Text>
        <View style={styles.btn}>
          <Button
            title="Menu"
            onPress={this.getListCall}
          />
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ItemSeparatorLine}
          renderItem={({ item }) =>
            <TouchableOpacity activeOpacity={0.9} onPress={this.GetListItem.bind(this, item.description)}>
              <View style={styles.container} >

                <Text style={styles.welcome} > {item.item_name} </Text>
              </View>
            </TouchableOpacity>
          }

          keyExtractor={(item, item_id) => item_id.toString()}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  head:
  {
    textAlign: 'center',
    fontSize: 30,
    margin: 30
  },
  btn: {
    width: "35%",
    backgroundColor: "red",
    marginLeft: "32%"
  }
});