import db from "../../firebase/config";
import { Alert } from 'react-native';

export const authSignUpUser= ({ email, password, login }) => async (dispatch, getState) => {
    try{
const user = await db.auth().createUserWithEmailAndPassword(email, password)
    }catch(error){
        console.log("error" , error);
        console.log("error.message", error.message);
        Alert.alert("Error! Email or password doesn't match!");
    }
};
export const authSingInUser = () => async (dispatch, getState) => {};
export const authSingOutUser = () => async (dispatch, getState) => {};
