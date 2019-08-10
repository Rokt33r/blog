import { SSR } from './consts'
import ky from 'ky-universal'

export async function getStaticMarkdownFile(pathName: string): Promise<string> {
  if (SSR) {
    return (await import(`../static/${pathName}`)).default
  } else {
    return await ky(`/static/${pathName}`).text()
  }
}
export async function getStaticJSONFile(pathName: string): Promise<string> {
  if (SSR) {
    return (await import(`../static/${pathName}`)).default
  } else {
    return await ky(`/static/${pathName}`).json()
  }
}

export async function getPostByName(postName: string): Promise<string> {
  return getStaticMarkdownFile(`posts/${postName}.md`)
}

export async function getGeneratedJSONFile(name: string): Promise<any> {
  return getStaticJSONFile(`generated/${name}.json`)
}
