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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputtext: '',
      dataarray: [
        {
          judul: 'Makan',
          Deskripsi: 'Adalah tindakan memasukan makanan kedalam tubuh',
        },
        {
          judul: 'Minum',
          Deskripsi: 'Adalah tindakan memasukan minuman kedalam tubuh',
        },
        {
          judul: 'Meriang',
          Deskripsi: 'Adalah perasaan tidak enak yang dialami tubuh',
        },
        {
          judul: 'Roda',
          Deskripsi: 'Adalah alat yang digunakan pada sepedah motor',
        },
        {
          judul: 'Kunam',
          Deskripsi: 'Adalah tindakan memasukan makanan kedalam tubuh',
        },
        {
          judul: 'anjay',
          Deskripsi: 'Adalah tindakan memasukan makanan kedalam tubuh',
        },
        {
          judul: 'yoi',
          Deskripsi: 'Adalah tindakan memasukan makanan kedalam tubuh',
        },
      ],

      datareplace: [
        {
          judul: 'Makan1',
          Deskripsi: 'Adalah tindakan memasukan makanan kedalam tubuh',
        },
        {
          judul: 'Minum',
          Deskripsi: 'Adalah tindakan memasukan minuman kedalam tubuh',
        },
        {
          judul: 'Meriang',
          Deskripsi: 'Adalah perasaan tidak enak yang dialami tubuh',
        },
        {
          judul: 'Roda',
          Deskripsi: 'Adalah alat yang digunakan pada sepedah motor',
        },
        {
          judul: 'Kunam',
          Deskripsi: 'Adalah tindakan memasukan makanan kedalam tubuh',
        },
        {
          judul: 'anjay',
          Deskripsi: 'Adalah tindakan memasukan makanan kedalam tubuh',
        },
        {
          judul: 'yoi',
          Deskripsi: 'Adalah tindakan memasukan makanan kedalam tubuh',
        },
      ],
      pencarian : '',
    };
  }

  pencarian = () => {
    let data = this.state.dataarray;
    data = data.filter((item) => item.judul.includes(this.state.pencarian));
    this.setState({datareplace: data});
  };
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
            Kamus
          </Text>
        </View>
        <TextInput
          style={{
            width: 340,
            height: 40,
            borderRadius: 40,
            backgroundColor: 'white',
            marginTop: 20,
            marginLeft: 35,
            marginRight: 35,
            marginBottom: 10,
          }}
          value={this.state.pencarian}
          onChangeText={text =>
            this.setState({pencarian: text}, () => this.pencarian())
          }
          placeholder="Masukan Pencarian"
        />

        <FlatList
          data={this.state.datareplace}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                backgroundColor: '#00796B',
                padding: 15,
                marginLeft: 35,
                marginRight: 35,
                marginVertical: 4,
                marginTop: 10,
                borderRadius: 30,
              }}
              onPress={() =>
                this.props.navigation.navigate('Detail', {
                  judul: item.judul,
                  Deskripsi: item.Deskripsi,
                })
              }>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                {item.judul}
              </Text>
              <Text style={{color: 'white', fontSize: 13}}>
                {item.Deskripsi}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.judul}
        />
      </View>
    );
  }
}

export default Home;
