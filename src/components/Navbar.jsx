import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='flex justify-between w-full py-6 items-center navbar'>
      <img src={logo} alt="HooBank logo"
        className="w-[124px] h-[32px]"
      />

      <ul className='sm:flex justify-end list-none items-center flex-1 hidden '>

        {navLinks.map((nav, index) => (
          <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            key={nav.id}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center  '>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((toggle) => !toggle)} />
      </div>

      <div className={`${toggle?'flex':'hidden'} absolute p-6 bg-black-gradient top-16 right-0 mx-4 my-2 rounded-xl min-w-[140px] sidebar`}>
        <ul className='flex flex-col justify-end list-none items-center flex-1 '>
          {navLinks.map((nav, index) => (
            <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
              key={nav.id}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar