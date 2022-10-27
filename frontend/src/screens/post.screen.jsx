import { SafeAreaView } from "react-native";
import { AddNewPost } from "../components/post/addNewPost.component";

export const PostScreen = ({navigation}) => {
    return (

        <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
            <AddNewPost navigation={navigation}/>
        </SafeAreaView>
    )
};