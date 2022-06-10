import React from 'react'

export const AuthContext = React.createContext();

function getToken(){
    return localStorage.getItem('token')
}

function setToken(token){
    localStorage.setItem("token",`Bearer ${token}`)
}

function removeToken(){
    localStorage.removeItem('token')
}
function getUserName(){
    return localStorage.getItem('user')
}

function setUserName(user){
    localStorage.setItem("user",user)
}

function removeUserName(){
    localStorage.removeItem("user")
}

export const AuthFunctions = {
    getToken,setToken,removeToken,getUserName,setUserName,removeUserName
}
