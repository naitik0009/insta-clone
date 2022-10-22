import {  SafeAreaView, StyleSheet,Text } from "react-native"
import { HeaderComponent } from "../components/home/header.component"
import { StoryComponent } from "../components/home/stories"

export const HomeScreen = ()=>{
    return (
        <>
        <SafeAreaView style={styles.container}>
            <HeaderComponent />
            <StoryComponent/>
        </SafeAreaView>
        </>
    )

}
const styles = StyleSheet.create({
    container:{backgroundColor:"black",flex:1}
})

