import React, { Component } from 'react';
import { StyleSheet,AppRegistry, View ,Text,TouchableOpacity} from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{flex: 1}}>
        <View style={styles.container} >
          <Text style={styles.text}>www</Text>
        </View>
        <View style={{flex: 9, backgroundColor: 'skyblue'}} />
        <View style={{flex: 2, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
  
}
var styles = StyleSheet.create({
  text: {
    textAlign: "center"  
  },
  container: {
    flex: 1,
    //flexDirection: "row",
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "powderblue"
  },
  thumbnail: {
    width: 53,
    height: 81
  }
});
