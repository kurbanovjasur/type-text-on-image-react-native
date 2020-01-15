import React, {Component} from 'react';
import { StyleSheet, Button, Image, Text, View } from 'react-native';

export default class App extends Component{
  state={
    randomId:0
  };

  randomNumber = () =>{
    let randomNum = Math.floor(Math.random()*1000);
    this.setState({randomId: randomNum});
  };

  render() {

    const randomImage = {uri: `https://i.picsum.photos/id/${this.state.randomId}/500/500.jpg`};
    return (
        <View style={styles.container}>
          <Text>This is random image generator</Text>
          <Image source={randomImage} style={{width: 500, height: 500}}/>
          <Button onPress={this.randomNumber} title={'Generate Image'}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
