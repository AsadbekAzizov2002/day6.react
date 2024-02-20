import React, { useState } from 'react'

 const App = () => {
  const [step ,setStep] = useState(1);
  const [userData, setUserData]= useState({
    username:"",
    Password:"",
    onfirmPassword:"",
    Subscriptiontype:"",
    FirsName:"",
    LastName:"",
    middleName:"",
    Birhtdate:"",
    Email:"",
    Gender:"",
    CardNumber:"",
  })
  const increment = ()=>{
    setStep((prev)=>prev +1 );
  }
  const decrement =()=>{
    setStep ((prev)=>prev - 1 );
  }
  return (
    <div className=' container mx-auto mt-5 rounded-md border bg-white shadow-lg drop-shadow-lg'>
        <h2 className='  mb-4 text-4xl font-bold'>User Registration Wizard - Step </h2>
        {
          step ===1 && (
            <div className='step1'>
        <label htmlFor="username">
          Login:
        <input
         id='username'
         value={userData.username}onChange={(e)=>setUserData({...userData,username: e.target.value })}
         className=' p-2 w-full rounded border-solid bg-yellow-100'  
         type="text" name='login'  
         placeholder='UserName' />
        </label>
        <label htmlFor="Password">
        Password:
        <input 
        id='Password'
        value={userData.Password}onChange={(e)=>setUserData({...userData,Password: e.target.value })} 
        className=' p-2 w-full rounded border-solid bg-yellow-100'
         type="text" 
         name='password'  
         placeholder='Password' />
        </label>
        <label htmlFor="onfirmPassword">
        onfirm Password:
        <input 
        id='onfirmPassword'
        value={userData.onfirmPassword}onChange={(e)=>setUserData({...userData,onfirmPassword: e.target.value })}
        className=' p-2 w-full rounded mb-3 border-solid bg-yellow-100' 
        type="text" 
        name='conferm'  
        placeholder='Conform Pasword' />
        </label>
      </div>
          )
        }
      {
        step ===2 && (
          <div className='step2'>
            <label htmlFor="Subscriptiontype">
            Subscription type
            <input
             id='Subscriptiontype'
             value={userData.Subscriptiontype}onChange={(e)=>setUserData({...userData,Subscriptiontype: e.target.value })}
              className=' p-2 w-full rounded border-solid bg-yellow-100'  
              type="text" name='login' 
              placeholder='Choose an option' />
          </label>
          </div>
        )
      }
      {
        step ===3 &&(
          <div className='step3'>
             <label htmlFor="FirstName">
            First Name:
            <input
             id='FirsName'
             value={userData.FirsName}onChange={(e)=>setUserData({...userData,FirsName: e.target.value })}
              className=' p-2 w-full rounded border-solid bg-yellow-100'  
              type="text" name='login' 
              placeholder='First Name' />
          </label>
          <label htmlFor="LastName">
            Last Name:
            <input
             id='LastName'
             value={userData.LastName}onChange={(e)=>setUserData({...userData,LastName: e.target.value })}
              className=' p-2 w-full rounded border-solid bg-yellow-100'  
              type="text" name='login' 
              placeholder='LastName' />
          </label>
          <label htmlFor="middleName">
            middle Name:
            <input
             id='middleName'
             value={userData.middleName}onChange={(e)=>setUserData({...userData,middleName: e.target.value })}
              className=' p-2 w-full rounded border-solid bg-yellow-100'  
              type="text" 
              name='login' 
              placeholder='middleName' />
          </label>
          <label htmlFor="birhtdate">
            Birhtdate:
            <input
             id='birhtdate'
             value={userData.birhtdate}onChange={(e)=>setUserData({...userData,birhtdate: e.target.value })}
              className=' p-2 w-full rounded border-solid bg-yellow-100'  
              type="text"
              name='login' 
              placeholder='mm/dd/yyyy' />
          </label>
          <label htmlFor="email">
            Email:
            <input
             id='email'
             value={userData.email}onChange={(e)=>setUserData({...userData,email: e.target.value })}
              className=' p-2 w-full rounded border-solid bg-yellow-100'  
              type="text" 
              name='login' 
              placeholder='Email' />
          </label>
          <label htmlFor="gender">
            Gender:
            <input
             id='gender'
             value={userData.gender}onChange={(e)=>setUserData({...userData,gender: e.target.value })}
              className=' p-2 w-full rounded border-solid bg-yellow-100'  
              type="text" name='login' 
              placeholder='celect' />
          </label>
          </div>
        )
      }
      {
        step ===4 &&(
          <div className=' px-3 step4'>
             <label htmlFor="CardNumber">
            Card Number
            <input
             id='CardNumber'
             value={userData.CardNumber}onChange={(e)=>setUserData({...userData,CardNumber: e.target.value })}
              className=' p-2 w-full rounded border-solid bg-yellow-100'  
              type="text" 
              name='login' 
              placeholder='Card Number' />
          </label>
          </div>
        )
      }
      {
        step === 5 && (
          <div className=' px-3 step5'>
            <h3>Step-5 Consent to Persional Data Processing</h3>
             <label htmlFor="loginn">
            Login
            <input
             id='loginn'
              className=' p-2 w-full rounded border-solid bg-yellow-100'  
              type="text" 
              name='login' 
              placeholder='login name' />
          </label>
           <label htmlFor="passwordd">
            Password
            <input
             id='passwordd'
              className=' p-2 w-full rounded border-solid bg-yellow-100'  
              type="text" 
              name='login' 
              placeholder='pasword' />
          </label>
          <h3>Consent to Personal Data Processing:
             <span>
              <button className=' w-2 h-2 border bg-slate-300'></button></span>
              I Consent to personal data processingSite Uses Cookie Agreement:<span>
              <button className=' w-2 h-2 border bg-slate-300'></button></span> I agree to the site's use of cookies
             </h3>
          </div>
        )
      }
      {
        step ===6 && (
          <div className=' px-3 step6'>
            <h1 className=' font-bold mb-5'>Review your Information</h1>
            <h2>Login:{userData.username}</h2>
            <h2>Password:{userData.Password}</h2>
            <h2>Conform Password:{userData.onfirmPassword}</h2>
            <h2>Subscription Type:{userData.Subscriptiontype}</h2>
            <h2>Firs Name:{userData.FirsName}</h2>
            <h2>Last Name:{userData.LastName}</h2>
            <h2>middle Name:{userData.middleName}</h2>
            {/* <h2>Birhtdate:{username.birhtdate}</h2>
            <h2>Email:{userData.Email}</h2>
            <h2>Gender:{userData.Gender}</h2>
            <h2>Card Number:{userData.CardNumber}</h2>
            <h2>Are you older that 18? :no</h2>
            <h2>Consent to  personal data processing:no</h2>
            <h2>Site uses cookie agreement:no</h2> */}

          </div>
        )
      }
      {
        step ===7 &&(
          <div className='step7 text-center'>
            <h1 className=' font-bold'>Congratulations!</h1>
            <p>Your data has been saved successfully</p>
            <span className=' space-x-2 mt-3'>
              <button className=' bg-amber-500 px-2 py-2'>back</button>
              <button className=' bg-amber-500 px-2 py-2'>Close</button>
            </span>
          </div>
        )
      }
      <div className=' space-x-2 mt-3'>
        {
          step !==1 && (
            <button
            onClick={decrement}
            className=' rounded-md px-4 pb-2 border-none bg-red-500 text-white w-20 py-2'>Previous</button>
            
          )
        }
        {
          step !==6 ? (
           <button 
           onClick={increment}
           className=' rounded-md px-4 pb-2 border-none bg-red-500 text-white w-20 py-2'>Next</button>

          ) : (
           <button 
           onClick={increment}
           className=' rounded-md px-4 pb-2 border-none bg-red-500 text-white w-20 py-2'>Submit</button>

          )
        }
      </div>
    </div>
  )
}
export default App