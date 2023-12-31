import { firebaseConfig } from "./config"

registerUser = (email,password,confirmPassword,first_name,last_name) => {
    if (password ==confirmPassword) {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then((userCredential) => {
            Alert.alert("User registered!");
        })
        .catch(error => {
            Alert.alert(error.message);
        });
    }else{
        Alert.alert("Passwords don't match");
    }
};