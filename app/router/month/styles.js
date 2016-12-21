import {Dimensions} from 'react-native'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  headerBlock: {
    height:HEIGHT*0.4,
    flexDirection: 'row',
    marginTop:20,
  },
  headerImage:{
    position:"absolute",
    left:0,
    top:0,
    height:HEIGHT*0.4,
    width:WIDTH,
  },
  header:{
    flex:1,
    backgroundColor:"#f7f7f7",
    justifyContent:'center',
    alignItems:'center',
    position:"relative",
  },
  headerText:{
    fontSize:16,
    color:'#555',
  },
  body:{
    flex:1,
    flexDirection: 'row',
  },
  list:{
    flex:1,
    marginLeft:15,
    marginRight:15,
    flexDirection: 'column',
  },
  listItem:{
    flex:1,
    flexDirection: 'row',
  },
  item:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
  },
  itemText:{
    fontSize:14,
    color:"#555",
  },
  toDay:{
    margin:10,
    flex:1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:(WIDTH-30)/7,
    // borderBottomWidth:1,
    // borderBottomColor:'#F44336',
    // borderStyle:'solid',
    backgroundColor:"#F44336"
  },
  toDayText:{
    fontSize:14,
    color:"#fff",
  }
}
