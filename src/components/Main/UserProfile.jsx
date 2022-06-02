import { useContext, useEffect } from "react"
import { GithubContext } from "../../context/ContextProvider"
import { useParams, useNavigate } from "react-router-dom"
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { FaUserFriends, FaUsers, FaCodepen, FaStore } from "react-icons/fa"
function UserProfile() {
  const { getUser, User } = useContext(GithubContext)
  const {
    name,
    avatar_url,
    bio,
    email,
    followers,
    following,
    location,
    public_gists,
    html_url,
    twitter_username,
    blog,
    public_repos
  } = User
  const { login } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    getUser(login)
  }, [])

  return (
    <div>
      <button className="btn btn-outline my-5 " onClick={() => navigate("/")}>
        <i className="pr-1 font-bold text-lg ">
          {" "}
          <MdOutlineKeyboardBackspace />
        </i>{" "}
        Back
      </button>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <img
              src={avatar_url}
              alt={name}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <h2 className="text-3xl">{email}</h2>
            <p className="py-6">{bio}</p>
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Visit Github Profile
            </a>
            <div className="w-full mt-4 rounded-lg shadow-md bg-base-200 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a target="_blank" rel="noreferrer" href={`http://${blog}`}>
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`http://twitter.com/${twitter_username}`}
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 rounded-lg shadow-md bg-base-200 stats">
        <div className="stat">
          <div className="stat-figure text-secondary ">
            <FaUserFriends className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title text-md">Followers</div>
          <div className="text-lg stat-value">{followers}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary ">
            <FaUsers className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title text-md">Following</div>
          <div className="text-lg stat-value">{following}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary ">
            <FaCodepen className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title text-md">Public Repo</div>
          <div className="text-lg stat-value">{public_repos}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary ">
            <FaStore className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title text-md">Public gists</div>
          <div className="text-lg stat-value">{public_gists}</div>
        </div>
      </div>
    </div>
  )
}
export default UserProfile
