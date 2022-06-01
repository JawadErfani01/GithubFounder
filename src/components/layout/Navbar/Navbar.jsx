import NavbarLink from "./NavBarLink"
import NavSearch from "./NavSearch"

function Navbar() {
  return (
    <div className="navbar text-white  bg-slate-800">
      <div className="navbar-start">
        <NavSearch />
      </div>

      <div className="navbar-end">
        <NavbarLink />
      </div>
    </div>
  )
}
export default Navbar
