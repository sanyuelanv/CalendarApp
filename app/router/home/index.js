import React, {Component} from 'react'
import {StyleSheet,Text,View,Navigator} from 'react-native'
import styles from './styles'
import Content from './content'
import Month from '../month'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          year:parseInt(this.props.route.params.year)
        }
    }
    _handleRouter(month){
      let {navigator} = this.props
      let {year} = this.state
      navigator.push({
        name:month+'月',
        component:Month,
        index:month,
        params:{
          month:month,
          year:year,
        }
      })
    }
    _handleYear(type){
      let {year} = this.state
      if(type == 'next'){
          year +=1
          this.setState({year:year})
      }
      if(type == 'pre'){
          year -= 1
          this.setState({year:year})
      }
    }
    render() {
      let {year} = this.state
      return (
          <View style = {styles.container} >
              <Content
                timeData = {{year:year}}
                _handleRouter = {this._handleRouter.bind(this)}
                _handleYear = {this._handleYear.bind(this)}
                {...this.props}
              />
          </View>
      )
    }
}


export default App
