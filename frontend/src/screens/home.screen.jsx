import {  SafeAreaView,  StyleSheet,Text,FlatList } from "react-native";
import { HeaderComponent } from "../components/home/header.component";
import { PostComponent } from "../components/home/post.component";
import { authentication, db } from "../services/databases/firebase.config";
import { collection, collectionGroup,doc, getDocs,query} from "firebase/firestore/lite";
import { StoryComponent } from "../components/home/stories";
import { BottomNavigationComponenet, BottomTabIcons } from "../components/home/bottomTab.component";
import {Users} from "../services/data/dummy";
import React from "react";
export const HomeScreen = ({navigation})=>{
    var i = 0;
    
   
        const getData = async ()=>{
            const quer = await query(db,"users");
            const snapShot = await getDocs(quer);
            const data = snapShot.docs.map((doc)=>{
                return {...doc.data(),id:doc.id}
            });
            data.map(async(element)=>{
                const posts = query(collection(db,`users/${element.id}/posts`));
                const mainData = await getDocs(posts);
                const finalPost = mainData.docs.map((doc)=>(
                    {...doc.data(),id:doc.id}
                ));
                console.log(finalPost);
            });
            
        
        
    }
    React.useEffect(  ()=>{
    
        getData()

    },[])
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

