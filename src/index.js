import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { App } from './App'
import { Provider } from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-alpha.now.sh/graphql'
})

ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('app')
)
