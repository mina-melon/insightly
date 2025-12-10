import React from 'react';
import Nav from './Nav';

export default function LandingLayout({children}:{children:React.ReactNode}){
  return (
    <>
    <div className='fixed top-0 left-0 w-full z-50'>
      <Nav />
    </div>
    
    {children}
    </>
  )
}