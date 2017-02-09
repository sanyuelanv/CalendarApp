import {Platform} from 'react-native'
let {OS} = Platform
export default styles = {
  headerBlock: {
    height: OS== "android"?40:60,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#ffffff',
  },
  header: {
    marginTop:23,
    // backgroundColor: '#ccc',

  },
  headerText: {
    fontSize: 18,
    color: '#545454',
    textAlign: 'center',
  },
  left: {
    flex: 1,
    // height: 40,
    // paddingLeft: 15,
    // paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBack: {
    width:20,
    height:20,
  },
}
