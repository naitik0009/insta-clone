import { Button, TextInput, StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native"
import { Formik } from "formik"
import { ActivityIndicator} from 'react-native-paper';
import * as yup from "yup";
import { validate } from "email-validator";
import { authentication } from "../../services/databases/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";

export const LoginComponent = ({ navigation }) => {
    const [loading, setLoading] = React.useState(false);
    const LoginFormSchema = yup.object().shape({
        email: yup.string().required("An email is required"),
        password: yup.string().required().min(8, "Your password should be atleast 8 character long")
    });

    const SignIn = async (email, password) => {
        try {
            console.log(email,password)
            setLoading(true);
            await signInWithEmailAndPassword(authentication, email, password).then((result) => { console.log(result); setLoading(false) }).catch((error) => { setLoading(false); alert( 'auth/user-not-found' in error ? "please sign up" : "email or password doesn't exist"); })
        } catch (error) {
            setLoading(false);
            alert(error.message);
        }
    };

    return (
        <Formik initialValues={{ email: "", password: "" }} onSubmit={(values) => { SignIn(values.email, values.password); }} validationSchema={LoginFormSchema} validateOnMount={true} >
            {({ handleBlur, handleChange, handleSubmit, isValid, values, errors }) => (

                <View style={styles.container}>
                    {loading ? (<ActivityIndicator />) : (<View><TextInput
                        style={[styles.textBox, { borderColor: values.email.length < 1 || validate(values.email) ? "black" : "red" }]}
                        placeholderTextColor={"grey"}
                        placeholder={"Phone number,username or email"}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoFocus={true}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                    />
                        <Text></Text>
                        <TextInput
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            value={values.password}
                            style={[styles.textBox, { borderColor: values.password.length < 1 || values.password.length >= 8 ? "black" : "red" }]} autoCapitalize="none" autoCorrect={false} placeholder="enter your password" textContentType="password" placeholderTextColor={"grey"} secureTextEntry={true} />
                        <View style={{ alignItems: "flex-end", marginBottom: 10 }}>
                            <Text style={{ color: "#6BB0F5" }}>Forgot password ?</Text>
                        </View>
                        <View style={styles.button(isValid)}>
                            <Button title="Log In" onPress={handleSubmit} disabled={!isValid} color={"white"} />
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center", justifyContent: "center" }}>
                            <Text>Don't have an account ? </Text><TouchableOpacity onPress={() => { navigation.navigate("Register") }}><Text style={{ color: "#0096F6" }}>Sign up</Text></TouchableOpacity>
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