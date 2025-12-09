import React from 'react';
import Nav from './Nav';

export default function LandingLayout({children}:{children:React.ReactNode}){
  return (
    <>
    <Nav/>
    {children}
    </>
  )
}