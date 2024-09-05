import React from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className='bg-blue-400 flex justify-between items-center p-4 fixed top-0 right-0 left-0'>
      <div>
        <Link to='/'>Talent Forge</Link>
      </div>

      <ul className='justify-center items-center gap-10 hidden md:block' >
        <Link to='/Article'>News/Article</Link>
        <Link>AboutUs</Link>
        <Link>Help Center</Link>
      </ul>

      <div className='flex justify-center items-center  gap-5'>
        <div className='hidden md:block'>
          <Link>SignUp</Link>
        </div>

        <div className='hidden md:block'>
          <Link>SigIn</Link>
        </div>

        <div>
          <RxHamburgerMenu />
        </div>

      </div>


      {/**Sidebar */}
      <div>

      </div>

    </div>
  )
}

export default Header
