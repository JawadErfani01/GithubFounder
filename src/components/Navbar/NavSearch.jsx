import { Link } from "react-router-dom"
import { useContext } from "react"
import { GithubContext } from "../../context/DisplayProvider"
import { FaGithub, FaSearch } from "react-icons/fa"
function NavSearch() {
  const {
    showSearch,
    setshowSearch,
    handelSearch,
    Search,
    setSearch,
    setSearchPerson
  } = useContext(GithubContext)
  const handelSubmit = (e) => {
    handelSearch()
    e.preventDefault()
    setSearchPerson(Search)
    setSearch("")
  }
  return (
    <>
      <Link to="/" className=" normal-case text-4xl mx-2 sm:mx-4">
        <FaGithub />
      </Link>
      <form
        className={`form-control sm:w-1/2 ${
          showSearch ? "block mt-32 w-full absolute" : "hidden"
        } sm:block`}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={Search}
            className={`input  w-full ${
              showSearch
                ? "w-5/6 mx-auto block absolute   "
                : setshowSearch(false)
            }  text-black input-bordered`}
          />
          <i
            className="absolute right-0  bg-indigo-600 p-4 px-4 md:px-5 lg:px-8 rounded-r-lg cursor-pointer text-white"
            onClick={handelSubmit}
          >
            <FaSearch />
          </i>
        </div>
      </form>
      <i
        onClick={() => setshowSearch(!showSearch)}
        className="p-3 mx-1 hover:bg-slate-300 bg-slate-500 sm:hidden hover:text-black rounded-full"
      >
        <FaSearch />
      </i>
    </>
  )
}
export default NavSearch
