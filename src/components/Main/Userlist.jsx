import PropTypes from "prop-types"
function Userlist({ person }) {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={person.avatar_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {person.login}</h2>
        <p>{person.followers_url}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">More ...</button>
        </div>
      </div>
    </div>
  )
}

Userlist.propTypes = {
  person: PropTypes.object.isRequired
}
export default Userlist
