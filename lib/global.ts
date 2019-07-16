import { useContext, createContext } from 'react'
import { GlobalResponseBody } from '../api/global'

export const GlobalDataContext = createContext<GlobalResponseBody>({
  categories: []
})

export function useGlobalData() {
  return useContext(GlobalDataContext)
}
