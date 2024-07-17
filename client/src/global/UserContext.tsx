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

export type User = {
  name: string
  email: string
}

export interface UserContextProps {
  user: User
  setUser: (user: User) => void
}

export const UserContext = createContext<Partial<UserContextProps>>({})

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>()
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
