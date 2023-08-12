import React, { useState } from 'react';
import Link from '../Link/Link.jsx';
import { BiX, BiMenu } from "react-icons/bi";
import './Navbar.css'



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    {
      id: 1,
      name: 'Home',
      path: '#'
    },
    {
      id: 2,
      name: 'Experiance',
      path: '#experiance'
    },
    {
      id: 3 ,
      name: 'Skills',
      path: '#skills'
    },
    {
      id: 4,
      name: 'Service',
      path: '#services'
    },
    {
      id: 5,
      name: 'Contact',
      path: '#contact'
    },
//https://marketifythemes.net/html/elisc/index-one-page.html
  ];

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".bg-gray-400")
    header.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <nav className='bg-gray-400'>
        <div onClick={() => setOpen(!open)} className='md:hidden'>
          <span>
            {
              open === true ?
                <BiX className='icon-x' />
                : <BiMenu className='icon-x' />
            }
          </span>
        </div>
        <ul className={`md:flex absolute duration-500 bg-slate-500 p-2 h-full md:static ${open ? 'left-0' : '-left-36'}`}>
          {
            routes.map(route => <Link
              key={route.id}
              route={route}
            ></Link>)

          }
        </ul>
      </nav>

    </>
  );
};

export default Navbar;