import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className='h-auto w-full'>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
