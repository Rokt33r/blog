import React, { useEffect } from 'react'
import DefaultTemplate from '../templates/DefaultTemplate'
import { useRouter } from 'next/router'
import { find } from 'ramda'

const redirectTupleList = [
  ['/devnotes/2017/09/10/redux-rises', '/posts/redux-rises'],
  ['/devnotes/2017/03/08/monorepo-and-lerna', '/posts/monorepo-and-lerna'],
  [
    '/devnotes/2017/09/08/contribute-definitely-typed',
    '/posts/contribute-definitely-typed.md'
  ],
  ['/devnotes/2017/01/20/babel-plugin', '/posts/try-to-build-babel-plugin.md'],
  ['/devnotes/2017/01/19/rogue-to-codemirror', '/posts/monorepo-and-lerna.md'],
  [
    '/devnotes/2018/03/04/why-i-replace-redux-with-mobx',
    '/posts/why-i-replace-redux-with-mobx'
  ]
]

export default () => {
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

  if (redirectTuple != null) {
    return <DefaultTemplate>Redirecting...</DefaultTemplate>
  }

  return (
    <DefaultTemplate>
      <h1>404 Error!</h1>
      <p>Page does not exist!</p>
    </DefaultTemplate>
  )
}
