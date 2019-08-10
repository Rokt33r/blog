import React from 'react'
import { NextPageContext } from 'next'
import DefaultTemplate from '../templates/DefaultTemplate'
import withRedirect from '../lib/withRedirect'

interface ErrorPageProps {
  statusCode: number
}

const ErrorPage = ({ statusCode }: ErrorPageProps) => {
  const redirecting = withRedirect()

  if (redirecting) {
    return <DefaultTemplate>Redirecting...</DefaultTemplate>
  }

  return (
    <DefaultTemplate>
      <h1>Error!</h1>
      <p>
        {statusCode != null
          ? `An error ${statusCode} occurred while fetching page data`
          : 'An error occurred on client'}
      </p>
    </DefaultTemplate>
  )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default ErrorPage
