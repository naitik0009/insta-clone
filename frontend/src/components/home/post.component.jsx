import {Divider} from "@rneui/base";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "@rneui/base";
import { useState } from "react";

export const PostComponent = ({post})=>{
    console.log(post);
    return (
      <View style={{marginBottom:30}}>
      <Divider width={0.5} orientation="vertical"/>
      <PostHeader post={post}/>
        <PostImage post={post}/>
        <PostFooter/>
        <Likes post={post}/>
        <Caption post={post}/>
        <Comment/>
      </View>    
      );
};

const PostHeader = ({post})=>{
    return(
    <View style={{flexDirection:"row",margin:5,alignItems:"center",justifyContent:"space-between"}}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <Image source={{uri:post.item.image}} style={styles.image}/>
        <Text style={{color:"white",fontSize:15,marginLeft:5,fontWeight:"600"}}>{post.item.name}</Text>
    </View>
    <Icon type="ionicon" color="white" name="ellipsis-horizontal-outline"/>
    </View>
        );
};
const Likes = ({post})=>{
    return (
        <View style={{marginLeft:20}}>
            <Text style={{color:"white"}}>{post.item.likes.toLocaleString("en")} likes</Text>
        </View>
    )
}
const Caption = ({post})=>{
    return(
        <View style={{marginLeft:20}}>
            <Text style={{color:"white"}}>
            <Text style={{fontWeight:"600"}}>{post.item.name}</Text><Text> hello this is naitik fuck you all bitches</Text>
            </Text>
        </View>
    );
}
const Comment = ()=>{
    return (<View style={{marginLeft:20}}>
        <Text style={{color:"grey"}}>view all 3 comments</Text>
    </View>);
}
const PostImage =({post})=>{return (
    <View style={{width:"100%",height:450}}>
        <Image style={{height:"100%",resizeMode:"cover"}} source={{uri:post.item.image}} />
    </View>
    )}

const PostFooter = ()=>{
    const [heart,setHeart] = useState(false);
    const [save,setSave] = useState(false);
    return (
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:15}}>
<View style={{flexDirection:"row",alignItems:"center"}}>
<TouchableOpacity onPress={()=>{setHeart(!heart)}}><Icon style={{margin:5}}  type="ionicon" name={heart?"heart":"heart-outline"} color={heart?"red":"white"} /></TouchableOpacity>
<Icon type="feather" name="message-circle" style={{margin:5}} color="white" />
<Icon type="feather" style={{margin:5}} name="send" color="white" />
</View>
<View>
<TouchableOpacity onPress={()=>{setSave(!save)}}><Icon type="ionicon" name={save?"bookmark":"bookmark-outline"} color="white" /></TouchableOpacity>
</View>
        </View>
    );
}

const styles=StyleSheet.create({
    image:{width:40,height:40,borderRadius:50,marginLeft:10,borderWidth:3,borderColor:"grey"}
});