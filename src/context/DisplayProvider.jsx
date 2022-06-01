import { createContext, useState, useEffect } from "react"
import axios from "axios"
export const GithubContext = createContext()
function DisplayProvider({ children }) {
  const [showSearch, setshowSearch] = useState(false)
  const [loading, setloading] = useState(false)
  const [Data, setData] = useState([])

  const SearchUser = async (Search) => {
    setloading(true)
    const params = new URLSearchParams({
      q: Search
    })
    await axios
      .get(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
        headers: {
          Authorization: `Basic ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
      })
      .then((res) => {
        setData(res.data.items)
        setloading(false)
      })
  }

  return (
    <GithubContext.Provider
      value={{
        showSearch,
        setshowSearch,
        Data,
        setData,
        loading,
        setloading,
        SearchUser
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
export default DisplayProvider
