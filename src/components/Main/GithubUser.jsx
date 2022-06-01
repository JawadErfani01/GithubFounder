import { useContext } from "react"
import { GithubContext } from "../../context/DisplayProvider"
import Userlist from "./Userlist"
import Loading from "../layout/loading"
function GithubUser() {
  const { Data, loading,setData } = useContext(GithubContext)
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      {Data.length === 0 ? (
        <h1 className="text-center text-5xl text-blue-700 ">
          Search By userName
        </h1>
      ) : (
        <button onClick={()=>setData([])} className="btn btn-primary mx-auto w-4/5 sm:w-2/5 block my-3">Clear list</button>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-10 mt-10">
        {Data.length > 0 &&
          !loading &&
          Data.map((person, index) => <Userlist key={index} person={person} />)}
      </div>
    </div>
  )
}
export default GithubUser
