import PropTypes from "prop-types"
import { Link } from "react-router-dom"
function Userlist({ person }) {
  console.log(person)
  return (
    <div className="card  bg-base-100 shadow-xl">
      <img src={person.avatar_url} alt="Shoes" />

      <div className="card-body">
        <h2 className="card-title">Name: {person.login}</h2>
        <div className="card-actions justify-end">
          <Link to={`/user/${person.login}`} className=" text-blue-300">
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

Userlist.propTypes = {
  person: PropTypes.object.isRequired
}
export default Userlist
