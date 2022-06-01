import { useContext } from "react"
import { GithubContext } from "../../context/DisplayProvider"
import Userlist from "./Userlist"
function GithubUser() {
  const { Data } = useContext(GithubContext)
  console.log(Data)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 mt-10 lg:grid-col-5">
      {Data.length > 0 &&
        Data.map((person, index) => <Userlist key={index} person={person} />)}
    </div>
  )
}
export default GithubUser
