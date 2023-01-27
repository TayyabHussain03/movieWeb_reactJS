import React from 'react'
import Movies from './Movies'
import Navbar from './Navbar'
import Search from './Search'

const Home = () => {
  return (
    <>
      <Navbar />
      <Search />
      <Movies />
    </>
  )
}

export default Home