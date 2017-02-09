import {Platform} from 'react-native'
let {OS} = Platform
export default styles = {
    container:{
        flex:1,
        alignItems: 'center',
        paddingTop:OS == "android"?20:40,
    },
}
