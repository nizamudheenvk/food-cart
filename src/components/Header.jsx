import React from 'react'
import { Link } from 'react-router-dom'
import { searchfoods } from '../rudux/slice/foodSlic'
import { useDispatch } from 'react-redux'


const Header = () => {
  const dispatch  = useDispatch()
  return (
    <nav className='d-flex justify-content-evenly bg-dark fixed w-full py-4 font-bold'>
<Link to={'/'}><i className='fa-solid fa-truck-fast text-warning me-2'>Food cart</i></Link>
    <h2 style={{marginLeft:"900px"}} className='text-warning'>search food</h2>
    <input onChange={e=>dispatch(searchfoods(e.target.value.toLowerCase()))} className='rounded' type="text" />
    </nav>
    
  )
}

export default Header