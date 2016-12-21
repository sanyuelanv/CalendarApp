import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native'
import styles from './styles'
const leftIcon = require('../images/left.png')
const rightIcon = require('../images/right.png')

class Year extends Component {
  constructor(props) {
    super(props)
  }
  _handlePressPre(){
    let {_handleYear} = this.props
    _handleYear("pre")
  }
  _handlePressNext(){
    let {_handleYear} = this.props
    _handleYear("next")
  }
  render() {
    let {timeData} = this.props
    return (
      <View style={styles.header}>

        <TouchableOpacity onPress={this._handlePressPre.bind(this)} style={styles.headerBlock1}>
          <Image style={styles.yearsName} source={leftIcon} resizeMode="cover" />
        </TouchableOpacity>

        <View style={styles.headerBlock}>
          <Text style={styles.years}>{timeData.year}年</Text>
        </View>

        <TouchableOpacity onPress={this._handlePressNext.bind(this)} style={styles.headerBlock2}>
          <Image style={styles.yearsName} source={rightIcon} resizeMode="cover" />
        </TouchableOpacity>

      </View>
    )
  }
}

export default Year
