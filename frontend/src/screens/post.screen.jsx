import { SafeAreaView } from "react-native";
import { AddNewPost } from "../components/post/addNewPost.component";

export const PostScreen = () => {
    return (

        <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
            <AddNewPost />
        </SafeAreaView>
    )
};