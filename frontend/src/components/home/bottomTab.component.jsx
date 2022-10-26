import React,{useState} from "react";
import { View,Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Divider } from "@rneui/base";

export const  BottomTabIcons = [
    {name:"Home",inactive:"https://img.icons8.com/ios/50/ffffff/home.png",active:"https://img.icons8.com/ios-filled/50/ffffff/home.png"},
    {name:"Search",active:"https://img.icons8.com/ios-filled/50/ffffff/search--v1.png",inactive:"https://img.icons8.com/sf-ultralight/25/ffffff/search.png"},
    {name:"Reels",active:"https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",inactive:"https://img.icons8.com/ios/50/ffffff/instagram-reel.png"},
    {name:"Shop",active:"https://img.icons8.com/ios-glyphs/30/ffffff/shopping-bag-full.png",inactive:"https://img.icons8.com/windows/32/ffffff/shopping-bag-full.png"},
    {name:"profile", active:"https://scontent.fsif1-1.fna.fbcdn.net/v/t39.30808-6/311465222_1707028173008796_5908498084830453131_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SZtwzYCPrv0AX_Cw6kc&_nc_ht=scontent.fsif1-1.fna&oh=00_AT-ljvhfoBRx7CDK9VtejcT62pWAlcrzEO56cRQ9Z3PL8A&oe=63593187", inactive:"https://scontent.fsif1-1.fna.fbcdn.net/v/t39.30808-6/311465222_1707028173008796_5908498084830453131_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SZtwzYCPrv0AX_Cw6kc&_nc_ht=scontent.fsif1-1.fna&oh=00_AT-ljvhfoBRx7CDK9VtejcT62pWAlcrzEO56cRQ9Z3PL8A&oe=63593187"}
];

export const BottomNavigationComponenet = ({icons})=>{
const [activeTab,setActiveTab] = useState('Home');

const Icon = ({icon})=>
{
    return(
    <TouchableOpacity onPress={()=>(setActiveTab(icon.name))}>
        <Image source={{ uri: activeTab===icon.name? icon.active:icon.inactive}} style={[styles.icon,icon.name==="profile"?styles.profile():null,activeTab==="profile"?styles.profile(icon.name):null]} />
    </TouchableOpacity>
);}

return (
  <View style={styles.wrapper}>
    <Divider width={1} orientation="vertical"/>
      <View style={styles.container}>
        {icons.map((icon,index)=>{return <Icon key={index} icon={icon}/>})}
    </View>
  </View>
);

}

const styles = StyleSheet.create({
    wrapper:{position:"absolute",zIndex:1000,width:"100%",bottom:"0%",backgroundColor:"black"},container:{flexDirection:"row",justifyContent:"space-around",height:40,paddingTop:10},
    icon:{
    width:30,
    height:30,    },
    profile:(activeTab="")=>({
        borderRadius:50,
        borderWidth:activeTab==="profile"?2:0,
        borderColor:"#fff"
    })
},

);