import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchfoods } from '../rudux/slice/foodSlic'

const Home = () => {
    const {allRecipies,loading,errMessage} = useSelector(state=>state.foodReducer)
    console.log(allRecipies,loading,errMessage);
    
const [curruntpage,setCurruntpage]= useState(1)
const foodproductPerpage = 8
const totalpage = Math.ceil(allRecipies?.length/foodproductPerpage)
const curruntPageLastindex = curruntpage * foodproductPerpage
const curruntPageforstindex = curruntPageLastindex-foodproductPerpage
const visibleAllFoodProducts = allRecipies?.slice(curruntPageforstindex,curruntPageLastindex)


    
const dispatch = useDispatch()
useEffect(()=>{
dispatch(fetchfoods())
},[])

const navigateNextPage = ()=>{
    if(curruntpage!=totalpage){
        setCurruntpage(curruntpage+1)
    }
}
const navigateprevPage = ()=>{
    if(curruntpage!=1){
        setCurruntpage(curruntpage-1)
    }
}



  

  return (
    
<>
<div style={{padding:"100px"}} className='d-flex -justify-contents-center align-items-center text-lg '>
{
    loading ?
    <div className="d-flex justify-center align-items-center text-lg my-5">
        <img width={'70px'} height={'70px'} className='me-3' src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" alt="" />
        loading......

    </div>
    :
    <>
    <div className='grid grid-cols-4 gap-4'>
        {
            allRecipies?.length>0?
            visibleAllFoodProducts?.map(item=>(
                <div key={item?.id} className='col-4-lg  rounded border p-2 shadow'>
            <img  height={"200px"} width={'300px'} src={item?.image} alt="" />
            <div className='text-center'>
                <h3 className='text-xl font-bold'>{item?.name}</h3>
                <h3 className='text-xl font-bold '>{item?.cuisine}</h3>
                <Link  to={`/${item?.id}/view`}  style={{textDecoration:"none"}}className='bg-warning rounded p-1 mt-3 text-white inline-block '>View more</Link>
                <h3 className='text-xl font-bold '>{item?.cuisine}</h3>
            </div>
        </div>
            ))
        :
        <div className="d-flex justify-center align-items-center text-lg my-5 text-danger">
       
       Product not found

    </div>
        }
    </div>
    </>}

</div>
<div className="text-2xl text-center font-bold mt-20">

<span onClick={navigateprevPage} className='cursor-pointer'><i className='fa-solid fa-backward me-2'></i></span>
<span> {curruntpage} of {totalpage}</span>
<span onClick={navigateNextPage} className='cursor-pointer'><i className='fa-solid fa-forward me-2'></i></span>

</div>



</>  
)
}

export default Home