import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native"
import { Icon } from "@rneui/base"
import { LogoComponent } from "./logo.component"

export const HeaderComponent = ({navigation}) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity>
                <LogoComponent />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", }}>
                <TouchableOpacity><Icon type="feather" name="plus-square" onPress={()=>{return navigation.navigate("Post")}} color={"white"} style={{margin:5}}/></TouchableOpacity>
                <TouchableOpacity><Icon type="ionicon" name="heart-outline" color="white" style={{margin:5}}/></TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.unRead}>
                        <Text style={styles.unreadText}>0</Text>
                    </View><Icon type="feather" name="message-square" color="white" style={{margin:5}}/></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginHorizontal: 15 },
    icon: { width: 30, height: 30, resizeMode: "contain",margin:5 },
    unRead: { backgroundColor: "red", position: "absolute", left: 20, bottom: 18, width: 20, height: 18, borderRadius: 25, alignItems: "center", justifyContent: "center", zIndex: 100 },
    unreadText:{color:"white",fontWeight:"600"}
});