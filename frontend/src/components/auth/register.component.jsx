import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Button, TextInput } from "react-native"
import { Formik } from "formik"
import * as yup from "yup";
import { validate } from "email-validator";

export const RegisterComponent = ({ navigation }) => {
    const RegisterFormSchema = yup.object().shape({
        email: yup.string().required("An email is required"),
        password: yup.string().required().min(8, "Your password should be atleast 8 character long")
    })
    return (
        <Formik initialValues={{ email: "", password: "" }} onSubmit={(values) => { console.log(values); navigation.navigate("Home") }} validationSchema={RegisterFormSchema} validateOnMount={true} >
            {({ handleBlur, handleChange, handleSubmit, isValid, values, errors }) => (
                <View style={styles.container}>
                    <TextInput
                        style={[styles.textBox,{borderColor:values.email.length < 1 || validate(values.email) ? "black" : "red" }]}
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
                    {/* {errors.email} */}
                    <Text></Text>
                    <TextInput
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        style={[styles.textBox,{borderColor:values.password.length < 1 || values.password.length >= 8 ? "black" : "red" }]} autoCapitalize="none" autoCorrect={false} placeholder="enter your password" textContentType="password" placeholderTextColor={"grey"} secureTextEntry={true} />
               
                    <View style={styles.button(isValid)}>
                        <Button title="Sign up" onPress={handleSubmit} disabled={!isValid} color={"white"} />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center", justifyContent: "center" }}>
                        <Text>Already have an account ? </Text><TouchableOpacity onPress={()=>{navigation.navigate("Login")}}><Text style={{ color: "#0096F6" }}>Sign in</Text></TouchableOpacity>
                    </View>
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
    button:isValid=>({
        backgroundColor: isValid ?"#0096F6" : "#6BB0F5",

    })
});