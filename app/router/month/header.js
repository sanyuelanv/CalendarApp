import React, {Component} from 'react'
import {StyleSheet, Text, View,Image} from 'react-native'
import styles from './styles'
// import Content from './content'
const siCi = [
  "正月晴和风气新，纷纷已有醉游人",
  "新年都未有芳华，二月初惊见草芽",
  "故人西辞黄鹤楼，烟花三月下扬州",
  "人间四月芳菲尽，山寺桃花始盛开",
  "田家少闲月,五月人倍忙",
  "毕竟西湖六月中，风光不与四时同",
  "七月六日苦炎热，对食暂餐还不能",
  "八月湖太平，涵虚混太清",
  "可怜九月初三夜，露似珍珠月似弓",
  "十月江南天气好，可怜冬景似春华",
  "十一月中长至夜，三千里外远行人",
  "寒冬十二月，晨起践严霜",
]
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
