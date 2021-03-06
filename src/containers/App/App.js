import React,{Component} from 'react';
import './App.css';
import {Button} from 'semantic-ui-react';
import firebase from "../../firebase";
import ImageUplaod from "./ImageUplaod";
import UserPanel from "./UserPanel"


import {connect} from "react-redux"

class App extends Component {

    componentWillMount(){
        if(!this.props.currentUser){
            this.props.history.go(0)
        }
    } // before the component is mounted , making sure that there is signedIn user , if not refresh the page so that it redirects to home

    handleSignOut = () => {
        firebase.auth().signOut()
      
    }

    render(){
        return(
            <div>
                <Button onClick={this.handleSignOut} size="big" content="SignOut" color="brown" style={{margin:"10px"}}/>
                <ImageUplaod />
                <UserPanel currentUser={this.props.currentUser}/>
            </div>
        )
    }

}

const mapStateToProps = ({user}) => {
    return({
        currentUser: user.currentUser
    })
} // providing global state to the component

export default connect(mapStateToProps)(App);