import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Users } from "../../services/data/dummy";
export const StoryComponent = ()=>{
    return (
        <View>
            <ScrollView horizontal={true}>
                {Users.map((story,index)=>{
                        
                        
                      return ( <View key={index} style={{alignItems:"center"}}>
                        <Image style={styles.story} source={{ uri:story.image }}/>
                        <Text style={{color:"white"}}>{story.name.length>11?story.name.slice(0,10).toLowerCase()+"...":story.name.toLowerCase()}</Text>
                      </View> )            
                    })}
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    story:{width:70,height:70,borderRadius:50,marginLeft:10,borderWidth:3,borderColor:"orange"}
})