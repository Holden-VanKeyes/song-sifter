import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

interface UserProviderProps {
  children: ReactNode
}

// export type User = {
//   name: string
//   email: string
// }

export interface UserContextProps {
  currentUser: any
  setCurrentUser: (currentUser: any) => void
}

export const UserContext = createContext<Partial<UserContextProps>>({})

export default function UserProvider({ children }: UserProviderProps) {
  const [currentUser, setCurrentUser] = useState()
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}
