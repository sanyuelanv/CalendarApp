import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import styles from './styles'

class Day extends Component {
  constructor(props) {
    super(props)
  }
  _renderStyle(){
    let style = {day:styles.item,text:styles.itemText}
    let {year,month,day} = this.props
    let today = new Date()
    if(month){
      if(today.getMonth()+1 == month && today.getDate() == day && year == today.getFullYear()){
        style = {day:styles.toDay,text:styles.toDayText}
      }
    }
    return style
  }
  render() {
    let style = this._renderStyle()
    return (
      <View style={style.day}>
        <Text style={style.text}>{this.props.day}</Text>
      </View>
    )
  }

}

export default Day
