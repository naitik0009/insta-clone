import React from "react";
import { SignedInStack } from "../../routes/navigation";
import { SignedOutStack } from "../../routes/navigation";
import { authentication } from "../databases/firebase.config";
export const AuthNavigation = ()=>{
    const [currentUser,setCurrentUser] = React.useState(null);
    const userHandler = user => user ? setCurrentUser(user) : setCurrentUser(null);
    React.useEffect(()=>(
        authentication.onAuthStateChanged((user)=>userHandler(user))),[]);
    return (
        <>
        {currentUser?<SignedInStack/>:<SignedOutStack/>}
        </>
    )
}