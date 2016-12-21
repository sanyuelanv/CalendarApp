import React, {Component} from 'react'
import Home from './home'
import Header from '../component/header'
import {Navigator,Text,StyleSheet,View} from 'react-native'

const routeStack = [
  {
    name: "日历",
    index:0,
    component: Home,
    params:{
      year:new Date().getFullYear(),
    }
  },
]

class App extends Component {
  constructor(props) {
    super(props)
  }
  renderScene(route, navigator) {
    let Item = route.component
    return <Item navigator={navigator} route={route} routes ={routeStack} />
  }
  render() {
    return (
      <Navigator
        initialRouteStack = {routeStack}
        initialRoute = {routeStack[0]}
        renderScene = {this.renderScene.bind(this)}
        navigationBar={Header()}
      />
    )
  }
}

export default App
