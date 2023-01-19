import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useStateContext } from "../context";
import { navlinks } from '../constants'

import { ConnectWallet } from "@thirdweb-dev/react";

import './navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('Home')

  return (
    <nav className="flex">
      <div className="logo">
        <Link to="/">Health App</Link>
      </div>
      <ul className="nav">
        {navlinks.map((link) => (
          <li 
            key={link.name}
            className={`${isActive === link.name}`}
            onClick={() => {
              setIsActive(link.name)
              navigate(link.link)
            }}
          >
            {link.name}
          </li>
        ))}
      </ul>
      <ConnectWallet />
    </nav>
  )
}

export default Navbar