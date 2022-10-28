import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Button, TextInput } from "react-native"
import { Formik } from "formik"
import * as yup from "yup";
import { validate } from "email-validator";
import { authentication } from "../../services/data/databases/firebase.config";
import {createUserWithEmailAndPassword} from "firebase/auth";
import React from "react";

export const RegisterComponent = ({ navigation }) => {
    const [loading,setLoading] = React.useState(false);
    const RegisterFormSchema = yup.object().shape({
        email: yup.string().required("An email is required"),
        username: yup.string().required("Enter a username").min(6, "Your username should be atleast 6 character long"),
        password: yup.string().required().min(8, "Your password should be atleast 8 character long")
    });
    const SignUp= async(email,username,password) => {
        try {
            setLoading(true);
            await createUserWithEmailAndPassword(authentication,email,username,password).then((result)=>{setLoading(false);}).catch((error)=>{ setLoading(false); alert("auth/email-already-in-use" in error ? "user with this email already exist": "please login user already exist")});

        } catch (error) {
            setLoading(false);
            alert(error.message);
        }
    };
    return (
        <Formik initialValues={{ email: "", password: "", username: "" }} onSubmit={(values) => { SignUp(values.email,values.username,values.password); }} validationSchema={RegisterFormSchema} validateOnMount={true} >
            {({ handleBlur, handleChange, handleSubmit, isValid, values, errors }) => (
                <View style={styles.container}>
                  {loading?(<ActivityIndicator size={"small"}/>):(<View><TextInput
                        style={[styles.textBox, { borderColor: values.email.length < 1 || validate(values.email) ? "black" : "red" }]}
                        placeholderTextColor={"grey"}
                        placeholder={"Phone number or email"}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoFocus={true}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}

                    />
                    <TextInput
                        style={[styles.textBox, { borderColor: values.username.length < 1 || values.username.length >= 6 ? "black" : "red" }]}
                        placeholderTextColor={"grey"}
                        placeholder={"username"}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoFocus={true}
                        onChangeText={handleChange("username")}
                        onBlur={handleBlur("username")}
                        value={values.username}

                    />
                    {/* {errors.email} */}
                    <Text></Text>
                    <TextInput
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        style={[styles.textBox, { borderColor: values.password.length < 1 || values.password.length >= 8 ? "black" : "red" }]} autoCapitalize="none" autoCorrect={false} placeholder="enter your password" textContentType="password" placeholderTextColor={"grey"} secureTextEntry={true} />

                    <View style={styles.button(isValid)}>
                        <Button title="Sign up" onPress={handleSubmit} disabled={!isValid} color={"white"} />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center", justifyContent: "center" }}>
                        <Text>Already have an account ? </Text><TouchableOpacity onPress={() => { navigation.navigate("Login") }}><Text style={{ color: "#0096F6" }}>Sign in</Text></TouchableOpacity>
                    </View></View>)}
                </View>
            )}
        </Formik>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    textBox: {
        borderRadius: 4,
        padding: 12,
        borderColor: "grey",
        marginBottom: 10,
        borderWidth: 1,
    },
    button: isValid => ({
        backgroundColor: isValid ? "#0096F6" : "#6BB0F5",

    })
});