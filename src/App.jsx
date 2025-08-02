import React  from 'react'
import { useState,useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authservice from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { Header } from './components'
import {Footer} from './components'
import {Outlet} from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }})
    .finally(()=>setLoading(false))
  },[])
  // way to access environment variables(not good practice)
// console.log(import.meta.env.VITE_APPWRITE_URL)
 return !loading ? (
  <>
  <div className='text-black min-h-screen flex flex-wrap 
  context-between '>
    <div className='w-full block'>
      <Header/>
      <main>
        <Outlet/> 
      </main>
    <Footer/>
    </div>
  </div>
  </>

 ) :null
}

export default App
