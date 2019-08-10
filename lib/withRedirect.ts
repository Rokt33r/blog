import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { find } from 'ramda'

const redirectTupleList = [
  ['/devnotes/2017/09/10/redux-rises', '/posts/redux-rises'],
  ['/devnotes/2017/03/08/monorepo-and-lerna', '/posts/monorepo-and-lerna'],
  [
    '/devnotes/2017/09/08/contribute-definitely-typed',
    '/posts/contribute-definitely-typed'
  ],
  ['/devnotes/2017/01/20/babel-plugin', '/posts/try-to-build-babel-plugin'],
  ['/devnotes/2017/01/19/rogue-to-codemirror', '/posts/monorepo-and-lerna'],
  [
    '/devnotes/2018/03/04/why-i-replace-redux-with-mobx',
    '/posts/why-i-replace-redux-with-mobx'
  ]
]

export default function withRedirect() {
  const router = useRouter()
  const redirectTuple = find(
    ([matcher]) => !!router.asPath.match(matcher),
    redirectTupleList
  )

  useEffect(() => {
    if (redirectTuple != null) {
      router.push(redirectTuple[1])
    }
  }, [redirectTuple])

  return !!redirectTuple
}
