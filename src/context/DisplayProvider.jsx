import { createContext, useState, useEffect } from "react"
import axios from "axios"
export const GithubContext = createContext()
function DisplayProvider({ children }) {
  const [showSearch, setshowSearch] = useState(false)
  const [Search, setSearch] = useState("")
  const [SearchPerson, setSearchPerson] = useState("")
  console.log(SearchPerson)
  const [Data, setData] = useState([])
  useEffect(() => {
    axios
      .get("https://api.github.com/users", {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
      })
      .then((res) => {
        setData(res.data)
      })
  }, [])

  const handelSearch = () => {
    axios
      .get(`https://api.github.com/users/${SearchPerson}`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
      })
      .then((res) => {
        setData([res.data])
      })
  }
  return (
    <GithubContext.Provider
      value={{
        showSearch,
        setshowSearch,
        Search,
        setSearch,
        Data,
        SearchPerson,
        setSearchPerson,
        handelSearch
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
export default DisplayProvider
