import firebase from 'firebase/app';
import 'firebase/auth';

const state ={
    fireForm:{
        username:'',
        password:'',
        firstname:'',
        lastname:'',
        repeatPassword:'',
        email:'',
    }
}

const getters ={
    fireForm: state => state.fireForm,
}

const mutations ={
    // sign up
    signUp(){
        firebase.auth().createUserWithEmailAndPassword(state.fireForm.email,state.fireForm.password)
        .then(user =>{
            console.log(user)
        }).catch(err => console.log("error. " + err.message))
    },
    // login
    login(){
        firebase.auth().signInWithEmailAndPassword(state.fireForm.email,state.fireForm.password)
        .then(user =>{
            console.log('Well done.' + user)
        }).catch(err =>{
            console.log('Error! '+ err.message)
        })
    }
}

const actions ={

}

export default{
    state,
    getters,
    mutations,
    actions
}