import axios from "axios";

const API_KEY='AIzaSyCmSG7dMjEH-m6ie53SiyIBuUSsBiGPgcQ';

async function authcan (mode,email,password) {
    
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY} `,
         {
             email:email,
             password:password,
             returnSecureToken:true,
         }
      
    );

    const token = response.data.idToken;
    return token;
    return response.data;
}

export  function createUser(email,password){
    return authcan('signUp',email,password);
}

export  function login(email,password){
    return authcan('signInWithPassword',email,password);
    
}