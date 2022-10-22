import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native"

import { LogoComponent } from "./logo.component"

export const HeaderComponent = () => {
    return (
        <View style={styles.container}>

            <TouchableOpacity>
                <LogoComponent />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", }}>
                <TouchableOpacity><Image style={styles.icon} source={require("../../assets/plus.png")} /></TouchableOpacity>
                <TouchableOpacity><Image style={styles.icon} source={require("../../assets/heart.png")} /></TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.unRead}>
                        <Text style={styles.unreadText}>0</Text>
                    </View><Image style={styles.icon} source={require("../../assets/message.png")} /></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginHorizontal: 20 },
    icon: { width: 30, height: 30, resizeMode: "contain" },
    unRead: { backgroundColor: "red", position: "absolute", left: 20, bottom: 18, width: 20, height: 18, borderRadius: 25, alignItems: "center", justifyContent: "center", zIndex: 100 },
    unreadText:{color:"white",fontWeight:"600"}
});