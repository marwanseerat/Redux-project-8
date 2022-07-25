import React from 'react'

function LoginA() {

   
    let user_info= sessionStorage.getItem("user_info");
    const info = user_info.split(' ');
    const email= info[0];
    const username= info[1];


    return (
        <>
        <h1 style={{color:'white'}}>Hello Admin</h1>
        </>
    )
    
}
    export default LoginA