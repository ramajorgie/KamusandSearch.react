import React, {Component} from 'react';
import {
  ViewBase,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#009688'}}>
        <StatusBar backgroundColor="#00796B" />
        <View style={{backgroundColor: '#00796B', paddingVertical: 15}}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
            }}>
            Detail
          </Text>
        </View>

        <Text>{this.props.route.params.judul}</Text>
        <Text>{this.props.route.params.Deskripsi}</Text>
      </View>
    );
  }
}

export default Detail;
