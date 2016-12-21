import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import styles from './styles'
import Day from './day'

class Month extends Component {
  constructor(props) {
    super(props)
  }
  _DayNumber(year,month){
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10|| month == 12){
      return 31
    }
    if(month == 4 || month == 6 || month == 9 || month == 11 ){
      return 30
    }
    if(month == 2){
      if(year % 4 == 0 ){
        return 29
      }
      else {
        return 28
      }
    }
  }
  _renderWeek(){
    let {month,timeData} = this.props
    let {year} = timeData
    let maxDayNumber = this._DayNumber(year,month)
    let arr = []
    let index = 1
    let _renderDay = ()=>{
      let dayArr = []
      for(let day=0;day<7;day++){
        if(index > maxDayNumber){
          dayArr.push(<Day key={day} day={" "} />)
        }
        else {
          if(day == new Date(year,month-1,index).getDay()){
            dayArr.push(<Day year={year} month={month} day={index} key={day} />)
            index++
          }
          else {
            dayArr.push(<Day key={day} day={" "} />)
          }
        }
      }
      return dayArr
    }
    for(let week=0;week<6;week++){
      arr.push(
        <View style={styles.week} key={week}>
          {_renderDay()}
        </View>
      )
    }
    return arr
  }
  _handlePress(){
    let {month,timeData,_handleRouter} = this.props
    _handleRouter(month)
  }
  render() {
    return (
      <TouchableOpacity onPress={this._handlePress.bind(this)} style={this.props.styleName}>
        <View style={styles.monthHeader}>
          <Text style={styles.monthHeaderText}>{this.props.month}月</Text>
        </View>
        <View style={styles.table}>{this._renderWeek()}</View>
      </TouchableOpacity>
    )
  }
}

export default Month
