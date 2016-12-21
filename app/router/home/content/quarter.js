import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import styles from './styles'
import Month from './month'

class Quarter extends Component {
  constructor(props) {
    super(props)
  }
  _renderMonth(){
    let {quarter} = this.props
    let arr = [1,2,3]
    return arr.map((item,index)=>{
      let style = item == 3?styles.monthLast:styles.month
      return (
        <Month
          {...this.props}
          month = {item + quarter * 3}
          styleName={style}
          key = {index}
        />
      )
    })
  }
  render() {
    return (
      <View style={styles.quarter}>
        {this._renderMonth()}
      </View>
    )
  }
}

export default Quarter
