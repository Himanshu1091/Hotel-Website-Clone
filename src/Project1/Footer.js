import React from 'react'

function Footer() {
  return (
    <div>
      <div className=" container-fluid bg-dark text-light pt-2 pb-2">
        <div className='row'>
          <div className='col-sm-6 text-center'>
            <p className='text-secondary'>FOR BOOKINGS CONTACT</p>
            <p>1-800-111-825</p>
            <p className='text-secondary'>CUSTOMER SUPPORT </p>
            <p>contacttaj@tajhotels.com </p>
            <p className='text-secondary'>FEEDBACK</p>
            <p>website.feedback@tajhotels.com</p>
          </div>
          <div className='col-sm-6 text-center'>
           <p className='text-secondary'>QUICK LINKS</p>
           <ul className='navbar-verticle'
           style={{
            listStyleType:"none"
           }}>
            <li>
              <a className='nav-link mb-3 pe-4' href="">Home</a>
            </li>
            <li>
              <a className='nav-link mb-3 pe-4' href="">Ambiance</a>
            </li>
            <li>
              <a className='nav-link mb-3 pe-4' href="">Food</a>
            </li>
            <li>
              <a className='nav-link mb-3 pe-4' href="">About</a>
            </li>
            <li>
              <a className='nav-link mb-3 pe-4' href="">Contact</a>
            </li>
           </ul>
           {/* <a href="">Home</a>
           <a href="">Ambiance</a>
           <a href="">Food</a>
           <a href="">About</a>
           <a href="">Contact</a> */}
          </div>
        </div>
        <div className='ps-5'>
        <h3 className='text-center mb-2'>Thanks For Visiting</h3>
        <h6 className='text-center text-secondary'>All Rights Reserved</h6>
        <h5 className='text-center text-secondary'>@tajhotel</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer