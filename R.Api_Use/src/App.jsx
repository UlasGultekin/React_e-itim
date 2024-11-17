import { useState,useEffect} from 'react'
import axios from 'axios'
const BASE_URL="http://localhost:3005"

function App() {
 const getAllUser= async () =>{
 const response= await axios.get(BASE_URL+"/users")
 console.log(response);
 }
 const getById = async(userId)=>{
 const response = await axios.get(`${BASE_URL}/users/${userId}`)
 console.log(response.data);
 }

 const createUser = async(newUser)=>{
  const response = await axios.post(`${BASE_URL}/users/`,newUser)
  console.log(response.data);
  }

  const updateUser = async(userId,updatedUser)=>{
    const response = await axios.put(`${BASE_URL}/users/${userId}`,updatedUser)
    console.log(response.data);
    }
    const deleteUser = async(userId)=>{
      const response = await axios.delete(`${BASE_URL}/users/${userId}`)
      console.log(response.data);
      }
 useEffect(() => {
/*const newUser ={
  "username":"test",
  "password":"1234"
}

 createUser(newUser);*/
 /*const updatedUser ={
  "username":"test2",
  "password":"12345"
}
updateUser("b313",updatedUser);*/
deleteUser(1);

 }, [])
 

  return (
    <>
      
    </>
  )
}

export default App
