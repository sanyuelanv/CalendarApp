import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import styles from './styles'
import Day from './day'
const headerText = ["日","一","二","三","四","五","六"]
class Detail extends Component {
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
    let {month,year} = this.props
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
        <View style={styles.listItem} key={week}>
          {_renderDay()}
        </View>
      )
    }
    return arr
  }
  _renderHeader(){
    return (
      headerText.map((item,index)=>{
        return (
          <View style={styles.item} key={index}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )
      })
    )
  }
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.list}>
          <View style={styles.listItem}>
            {this._renderHeader()}
          </View>
          {this._renderWeek()}
        </View>
      </View>
    )
  }
}

export default Detail
