import React,{ Component } from 'react';
import logo from "./logo.png"
import "./UserPanel.css";
import {Dropdown , Image} from "semantic-ui-react"
import {connect} from "react-redux"
import {setUser} from "../../actions/index"



class UserPanel extends Component {

   
    dropDownOptions =()=>{
    
      return(
        [
            {   
                key:"user",
                text:<span>Signed in as <strong>{this.props.currentUser.displayName}</strong></span>,
                disabled:true
            }
        ]
      )
    }

    render(){
        return(
            // USER PANEL
            <div id="user-panel">
                {/* displaying tale heading */}
                <div id="user-panel-header">
                    <img src={logo} alt="logo" style={{height: "40px" , width:"auto" , margin:"10px"}}/>
                    Tale
                </div>

                {/* Dropdown */}
                <Dropdown 
                id="user-panel-dropdown" 
                trigger={
                    <span>
                        <Image src={this.props.currentUser.photoURL} spaced="right" avatar/>
                        {this.props.currentUser.displayName}
                    </span>
                } 
                options={this.dropDownOptions()}
                pointing
                />

            </div>
            
        )
        
    }
}

export default connect(null,{setUser})(UserPanel);