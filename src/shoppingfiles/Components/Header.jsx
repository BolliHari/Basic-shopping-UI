import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
      <div className='left'>
        <div className='shoplogo'>
          <img src='../Design-removebg-preview.png' alt='logo' />
        </div>
      </div>
      <div className='center'>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>More</li>
          </ul>
      </div>
      <div className='search'>
        <input type="text" placeholder='Search...' className='search-bar'/>
      </div>
      <div className='right'>
          <div>
            <button className='btn btn-primary sign-btn'>SignIn/SignUp</button>
          </div>
          <div className='cart'>
            Cart
          </div>
      </div>
    </div>
  )
}

export default Header
