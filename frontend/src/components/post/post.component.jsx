import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const uploadPostSchema = yup.object().shape({
    imageUrl:yup.string().url().required("Url required"),
    caption:yup.string().max(2200,"Caption has reached the character limit").required(),
})
export const PostData = ()=>{
    const [thumbnailUrl,setThumbnail] = React.useState("");

    return (
        <View>
            <Formik initialValues={{caption:"",imageUrl:""}} onSubmit={(values)=>console.log(values)} validationSchema={uploadPostSchema}>
                {({handleBlur,handleChange,handleSubmit,values,errors,isValid})=>{
                    return (
                    <>
                    <View>
                        <Image/>
                    </View>
                    <TextInput  />
                    <TextInput/>
                    </>

                    )
                }}
            </Formik>
        </View>
    );
};