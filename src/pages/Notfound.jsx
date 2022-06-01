import { useNavigate } from "react-router-dom"
import { FaHome } from "react-icons/fa"
function Notfound() {
  const navigate = useNavigate()
  return (
    <div className="text-center">
      <h1 className="text-5xl ">Oops!</h1>
      <h2 className="text-2xl p-4 text-red-500">404 - page Not found!</h2>
      <button className="btn btn-primary text-lg my-5 " onClick={() => navigate("/")}>
        <i className="mx-2 ">
          <FaHome />
        </i>
        BACK TO HOME
      </button>
    </div>
  )
}
export default Notfound
