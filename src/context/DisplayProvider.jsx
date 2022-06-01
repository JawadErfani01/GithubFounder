import { createContext, useState, useEffect } from "react"
import axios from "axios"
export const GithubContext = createContext()
function DisplayProvider({ children }) {
  const [showSearch, setshowSearch] = useState(false)
  const [Search, setSearch] = useState("")
  const [Data, setData] = useState([])
  useEffect(() => {
    axios.get("https://api.github.com/users").then((res) => {
      setData(res.data)
    })
  }, [])
  console.log(Data)
  return (
    <GithubContext.Provider
      value={{ showSearch, setshowSearch, Search, setSearch,Data }}
    >
      {children}
    </GithubContext.Provider>
  )
}
export default DisplayProvider
