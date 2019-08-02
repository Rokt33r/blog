import ky from 'ky-universal'
import { baseURL } from '../lib/consts'

export interface CategoriesIndexAPIResponseBody {
  categories: string[]
}

export async function fetchCategoriesIndexPageData(): Promise<
  CategoriesIndexAPIResponseBody
> {
  return ky(baseURL + '/api/categories').json()
}

export interface CategoriesShowAPIResponseBody {
  category: string
  posts: {
    icon: string
    name: string
    title: string
    tags: string[]
    category: string
    date: string
  }[]
}

export async function fetchCategoriesShowPageData(
  categoryName: string
): Promise<CategoriesShowAPIResponseBody> {
  return ky(baseURL + '/api/categories/' + categoryName).json()
}
