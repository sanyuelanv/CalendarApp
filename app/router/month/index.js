import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import styles from './styles'
import Header from './header'
import Month from './month'
class Detail extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {year,month} = this.props.route.params
    return (
      <View style={styles.container}>
        <Header month={month} year={year} />
        <Month month={month} year={year} />
      </View>
    )
  }
}

export default Detail
