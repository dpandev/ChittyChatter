import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged((user) => { //get user data and set it to the user
      setUser(user)
      setLoading(false)
      if (user) history.push('./chats')
    })
  }, [user, history]) //when things in dependency array change, the function is called again

  const value = { user }

  return (
    <AuthContext.Provider value={value}>
      {/* if not loading, then show children */}
      {!loading && children}
    </AuthContext.Provider>
  )
}