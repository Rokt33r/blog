import React from 'react'
import { NextPageContext } from 'next'
import DefaultTemplate from '../templates/DefaultTemplate'

export default class ErrorPage extends React.Component<{ statusCode: number }> {
  static getInitialProps({ res, err }: NextPageContext) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <DefaultTemplate>
        <h1>Error!</h1>
        <p>
          {this.props.statusCode != null
            ? `An error ${this.props.statusCode} occurred while fetching page data`
            : 'An error occurred on client'}
        </p>
      </DefaultTemplate>
    )
  }
}
