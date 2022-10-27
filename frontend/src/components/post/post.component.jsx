import React from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import {Divider} from "@rneui/base";
const uploadPostSchema = yup.object().shape({
    imageUrl:yup.string().url().required("Url required"),
    caption:yup.string().max(2200,"Caption has reached the character limit").required(),
})
export const PostData = ({navigation})=>{
    let holderimg = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png";
    const [thumbnailUrl,setThumbnail] = React.useState(holderimg);

    return (
        <View>
            <Formik initialValues={{caption:"",imageUrl:""}} onSubmit={(values)=>{console.log(values) ;navigation.goBack() }} validationSchema={uploadPostSchema} validateOnMount={true}>
                {({handleBlur,handleChange,handleSubmit,values,errors,isValid})=>{
                    return (
                    <>
                    <View style={styles.container}>
                        <Image source={{uri:thumbnailUrl?thumbnailUrl:holderimg}}
                        style={styles.image}
                        />
                   
                 <View style={styles.container1}>
                 <TextInput style={styles.textInput}
                        placeholder={"write a caption......"}
                        multiline={true}
                        placeholderTextColor={"grey"}
                        onChangeText={handleChange("caption")}
                        onBlur={handleBlur("caption")}
                        value={values.caption}
                    />
                 </View>
                     </View>
                     <Divider style={{marginBottom:5}} width={1} orientation="verticle"/>
                    <TextInput style={[styles.textInput,{marginBottom:5}]}
                    onChange={(event)=>(setThumbnail(event.nativeEvent.text))}
                    placeholder={"Enter image Url"}
                    placeholderTextColor={"grey"}
                    onChangeText={handleChange("imageUrl")}
                    onBlur={handleBlur("imageUrl")}
                    value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={styles.error}>{errors.imageUrl}</Text>
                    )}
                    <Button onPress={handleSubmit} disabled={!isValid} title="share"/>
                    </>

                    )
                }}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
   container:{
    flexDirection:"row",
    margin:10,
    justifyContent:"space-between",
   },
   container1:{
    flex:1,
    marginLeft:10,
   },
    textInput:{
        color:"white",
        fontSize:20,
    },
    image:{width:100,height:100,backgroundColor:"white"},
    error:{fontSize:10,color:"red"},
});