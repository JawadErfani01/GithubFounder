import { NavLink } from "react-router-dom"
import { BsPersonPlusFill } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
function NavbarLink() {
  return (
    <ul className="menu menu-horizontal lg:menu-horizontal  rounded-lg">
      <li className="mx-0  md:mx-4">
        <NavLink to="/">
          <i className="hidden sm:block"> Home</i>
          <i>
            <FaHome />
          </i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          <i className="hidden sm:block"> About</i>
          <i>
            <BsPersonPlusFill />
          </i>
        </NavLink>
      </li>
    </ul>
  )
}
export default NavbarLink
