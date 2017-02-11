import {Platform,Navigator} from 'react-native'
let headerTitleLeftMargin = Navigator.NavigationBar.Styles.Stages.Left.Title.marginLeft || 0
let {OS} = Platform
let styles

if(OS == "android"){
  styles = {
    headerBlock: {
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderBottomColor: '#d1d1d1',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      backgroundColor: '#ffffff',
      flex:1,
    },
    header: {
      marginTop:16,
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginRight: headerTitleLeftMargin,
      // backgroundColor: '#ccc',
    },
    headerText: {
      fontSize: 18,
      color: '#545454',
      // textAlign: 'center',
      // alignSelf: 'center'
    },
    left: {
      height: 40,
      paddingLeft: 15,
      paddingRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#ccc',
    },
    headerBack: {
      width:20,
      height:20,
    },
  }
}
else {
  styles = {
    headerBlock: {
      height:60,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderBottomColor: '#d1d1d1',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      backgroundColor: '#ffffff',
    },
    header: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: 18,
      color: '#545454',
      textAlign: 'center',
    },
    left: {
      flex: 1,
      height: 40,
      paddingLeft: 15,
      paddingRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerBack: {
      width:20,
      height:20,
    },
  }
}
export default styles
