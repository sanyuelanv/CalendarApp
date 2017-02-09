import React, {Component} from 'react'
import {StyleSheet, Text, View,Image} from 'react-native'
import styles from './styles'
const img = [
  require('./images/1.png'),
  require('./images/2.png'),
  require('./images/3.png'),
  require('./images/4.png'),
  require('./images/5.png'),
  require('./images/6.png'),
  require('./images/7.png'),
  require('./images/8.png'),
  require('./images/10.png'),
  require('./images/9.png'),
  require('./images/11.png'),
  require('./images/12.png'),
]
class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {month} = this.props
    return (
      <View style={styles.headerBlock}>
        <View style={styles.header}>
          <Image style={styles.headerImage} source={img[month-1]} resizeMode="cover" />
        </View>
      </View>
    )
  }
}

export default Header
