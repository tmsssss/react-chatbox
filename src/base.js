import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC2CZrmIrDo1G8uvZVndWiOmTbVrBdoauY",
    authDomain: "chatbox-app-9b187.firebaseapp.com",
    databaseURL: "https://chatbox-app-9b187.firebaseio.com"
})  

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base