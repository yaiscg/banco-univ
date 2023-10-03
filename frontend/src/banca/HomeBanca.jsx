import React from 'react';

import NavbarBanca from "../banca/components/NavbarBanca"
import Header from "../banca/components/Header"
import Info from "../banca/components/Info"


const HomeBanca = () => {
  return (
    <div className="HomeBanca">
      <Header/>
      <NavbarBanca/>
      <Info/>

    </div>
  )
}

export default HomeBanca