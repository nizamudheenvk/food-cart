import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const View = () => {
  const [viewfood,setViewfood]=useState({})
  const {id}= useParams()
  console.log(id);
  const {allRecipies} = useSelector(state=>state.foodReducer)
  console.log(allRecipies);
   
  useEffect(()=>{
if(sessionStorage.getItem("allRecipies")){
  const allRecipies = JSON.parse(sessionStorage.getItem("allRecipies"))
setViewfood( allRecipies.find(item=>item.id==id))
}
 },[])
  return (
   <>
   <Header/>
   <div className='row'>
    <div style={{padding:"140px"}} className=' d-flex col-6-lg '>
      <img width={'500px'} src={viewfood?.image} alt="" />
      <div style={{marginLeft:"120px",marginTop:"90px"}}>
        <h1 className='font-bold mt-3'  style={{fontSize:"30px"}}>Name : <span className='text-danger'>{viewfood?.name} </span> </h1>
        <h2 className='font-bold mt-3' style={{fontSize:"30px",}}> Cuisine : <span className='text-danger'>  {viewfood?.cuisine} </span></h2>
        <h2 className='font-bold mt-3'  style={{fontSize:"30px",}}>ingredients : <span className='text-danger'>{viewfood?.ingredients} </span> </h2>
        <h2  className='font-bold mt-3' style={{fontSize:"30px",}}>Rating  : {viewfood?.rating}<i className='fa-solid fa-star ,e-2 text-warning'></i></h2>
        </div>
   
    </div>
   
   </div>
   {/* <div className='ms-5'>
    <div className='grid grid-cols-2 items-center h-screen  '>
      <img width={'350px'} height={'250px'} src={viewfood?.image} alt="" />
       <h3 className='text-bold'>PID : 234</h3>
          <h1 className='text-5xl font-bold'>{viewfood?.name}</h1>
          <h4 className='text-bold text-red-600 text-2xl'>$ {viewfood?.price}</h4>
          <h4>cuisin : asian food</h4>
    </div>
   </div> */}
   </>
  )
}

export default View