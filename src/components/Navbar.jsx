import { Link } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";

import './navbar.css'

const Navbar = () => {
  return (
    <nav className="flex">
      <div className="logo">
        <a href="/#">Health App</a>
        
      </div>
      <ConnectWallet />
    </nav>
  )
}

export default Navbar