import ky from 'ky-universal'
import { baseURL } from '../lib/consts'

export interface GlobalResponseBody {}

export function fetchGlobalData(): Promise<GlobalResponseBody> {
  return ky(baseURL + '/api/global').json()
}
