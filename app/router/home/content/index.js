import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import styles from './styles'
import Year from './year'
import Quarter from './quarter'

class Content extends Component {
  constructor(props) {
    super(props)
  }
  _renderQuater(){
    let arr = [0,1,2,3]
    return arr.map((item,index)=>{
      let style = item == 3?styles.monthLast:styles.month
      return (
        <Quarter
          {...this.props}
          quarter = {index}
          styleName={style}
          key = {index}
        />
      )
    })
  }
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.content}>
          <Year {...this.props} />
          <View style={styles.body}>{this._renderQuater()}</View>
        </View>
      </View>
    )
  }
}

export default Content
