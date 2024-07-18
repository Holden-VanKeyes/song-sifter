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
  user: any
  setUser: (user: any) => void
}

export const UserContext = createContext<Partial<UserContextProps>>({})

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState()
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
