import {Dimensions} from 'react-native'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const redText = "#F44336"
const grayLine = '#E0E0E0'
const grayText = '#757575'

export default styles = {
  main: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop:20,
  },
  content:{
    flex:1,
    flexDirection: 'column',
  },
  header: {
    height: 50,
    marginLeft:20,
    marginRight:20,
    // borderStyle:"solid",
    // borderBottomColor:grayLine,
    // borderBottomWidth:1,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  headerBlock:{
    height:50,
    justifyContent:'center',
  },
  headerBlock1:{
    height:50,
    width:40,
    justifyContent:'center',
    // alignItems:"center"
  },
  headerBlock2:{
    height:50,
    width:40,
    justifyContent:'center',
    alignItems:"flex-end"
  },
  years:{
    fontSize:28,
    color:redText,
  },
  yearsName:{
    width:16,
    height:16,
    // fontSize:12,
    // color:grayText,
  },
  body:{
    flex: 1,
    marginLeft:15,
    marginRight:15,
    marginTop:10,
    marginBottom:10,
  },
  quarter:{
    flex:1,
    flexDirection: 'row',
    // marginBottom:5,
  },
  month:{
    flex:1,
    marginRight:10,
  },
  monthLast:{
    flex:1,
    marginRight:0,
  },
  monthHeader:{
    height:26,
    justifyContent:'center',
  },
  monthHeaderText:{
    color:redText,
    fontSize:16,
  },
  table:{
    flex:1,
  },
  week:{
    flex:1,
    marginBottom:1,
    flexDirection: 'row',
  },
  day:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    // margin:1,
  },
  today:{
    flex:1,
    height:(WIDTH-50)/21,
    justifyContent:"center",
    alignItems:'center',
    // margin:1,
    borderRadius:(WIDTH-50)/21,
    backgroundColor:redText,
    // borderStyle:'solid',
    // borderBottomColor:redText,
    // borderBottomWidth:1,
  },
  holiday:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    marginRight:1,
    borderStyle:'solid',
    borderBottomColor:redText,
    borderBottomWidth:1,
  },
  dayText:{
    fontSize:10,
    color:"#555",
  },
  todayText:{
    fontSize:10,
    color:"#fff",
  },
}
