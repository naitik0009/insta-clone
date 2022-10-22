import { Image, View } from "react-native";

export const LogoComponent = ()=>{
    return (
        
        <Image style={{width:100,height:50, resizeMode:"contain"}} source={require("../../assets/logo.png")}/>
    
    );
}