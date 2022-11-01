import {  SafeAreaView, ScrollView, StyleSheet,Text,FlatList } from "react-native"
import { HeaderComponent } from "../components/home/header.component"
import { PostComponent } from "../components/home/post.component"
import { StoryComponent } from "../components/home/stories"
import { Divider } from "@rneui/base"
import { BottomNavigationComponenet, BottomTabIcons } from "../components/home/bottomTab.component";
import {Users} from "../services/data/dummy";
export const HomeScreen = ({navigation})=>{
    var i = 0;
    return (
        <>
        <SafeAreaView style={styles.container}>
            <HeaderComponent navigation={navigation} />
            <StoryComponent/>

            <FlatList data={Users} key={i} renderItem={(item,index)=>(<PostComponent post={item}  key={i++}/>)} keyExtractor=  {item => item.id} />
            <BottomNavigationComponenet icons={BottomTabIcons}/>
        </SafeAreaView>
        </>
    )

}
const styles = StyleSheet.create({
    container:{backgroundColor:"black",flex:1}
})

