import * as actionTypes from "./types";
import firebase from "../firebase"

export const setUser = (user) => {
    return ({
        type: actionTypes.SET_USER,
        payload: {
            currentUser: user,
        }
    })
}// used to change the current user state

export const clearUser = () => {                           
    return({
        type: actionTypes.CLEAR_USER,
        payload: {
            currentUser: null,
        }
    })
} // used to clear the current user when signout

export const fetchLinks = (links) => { 
        const linkTask = firebase.storage().ref(`links`).child(links)  ;                    
    return({
        type: actionTypes.FETCH_LINKS,
        payload: {
            links: links,
        }
    })
} // used to clear the current user when signout
export const removeLinks = () => {                           
    return({
        type: actionTypes.REMOVE_LINKS,
        payload: {
            links: null,
        }
    })
} // used to clear the current user when signout


