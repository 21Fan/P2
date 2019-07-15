import React, { Component } from 'react';
import { AppRegistry, View ,Text,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
        <Text>location.coords.longitude</Text>
        </View>
          
        <View style={{flex: 9, backgroundColor: 'skyblue'}} />
        <View style={{flex: 2, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
