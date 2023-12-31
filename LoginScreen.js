signIn = async (email,password) => {
    firebase
       .auth()
       .signWithEmailAndPassword(email,password)
       .then(() =>{
        this.props.navigation.replace("Dashboard");
       })
       .catch(error => {
    Alert.alert(error.message);
});
};