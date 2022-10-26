import { Icon } from "@rneui/themed";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const AddNewPost = () => {
    
    
    
const Header=()=> (
            <View style={styles.headerContainer}>
                {/*<ion-icon name="arrow-back-outline"></ion-icon>*/}
                <TouchableOpacity>
                <Icon type="ionicon" name="arrow-back-outline" color={"white"} size={30}/>
                </TouchableOpacity>
        
        <Text style={styles.headerText}>
            Add new post
        </Text>
        <Text></Text>
    </View>
    );
    return (
    <View style={styles.container}>
    <Header/>    
    </View>
    );

}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
    },
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    headerText:{
        color:"#fff",
        fontWeight:"700",
        fontSize:20,
    },

})

