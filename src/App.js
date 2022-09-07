import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  const [bracelets, setBracelets] = useState([]);

  const onPressHandler = () => {
    const bracelet = {
      id: Date.now(),
      name: text,
    };

    setText('');

    setBracelets([...bracelets, bracelet]);
  };

  const listBracelets = () => {
    return (
      <FlatList
        data={bracelets}
        renderItem={({item}) => (
          <View style={styles.item} key={item.id}>
            <Text style={styles.text_item}>{item.name}</Text>
          </View>
        )}
      />
    );
  };

  const firstBracelet = () => {
    return (
      <View style={styles.register}>
        <Text style={styles.text}>Cadastre a primeira pulseira:</Text>
      </View>
    );
  };

  const registerBracelet = () => {
    return (
      <View style={styles.register}>
        <TextInput
          style={styles.input}
          placeholder="Pulseira da fulana"
          onChangeText={value => setText(value)}
          value={text}
        />
        <TouchableOpacity style={styles.button} onPress={onPressHandler}>
          <Text style={styles.text}>Registrar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Lista de pulseiras</Text>
      </View>
      <View style={styles.body}>
        {bracelets.length > 0 ? listBracelets() : firstBracelet()}
        {registerBracelet()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  register: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#00ff00',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  item: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_header: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  text_item: {
    color: '#000000',
    fontSize: 35,
    margin: 5,
  },
  input: {
    width: '75%',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default App;
