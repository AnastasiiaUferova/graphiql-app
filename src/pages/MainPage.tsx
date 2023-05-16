import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  Docs,
  ResponseComponent,
  RequestArea,
  RequestType,
  VarsType,
  QueryContextProvider,
} from 'components/main';
import { useState } from 'react';
import { API_URL } from '_constants/apiURL';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

const DEFAULT_QUERY = `query Character($characterId: ID!) {
  character(id: $characterId) {
    name
    gender
    id
  }
}`;

export default function MainPage() {
  const [query, setQuery] = useState<string>(DEFAULT_QUERY);
  const [variables, setVariables] = useState<VarsType | undefined>();
  const [request, setRequest] = useState<RequestType>({});

  const runRequest = () => {
    setRequest({ query, variables });
  };

  return (
    <>
      <ApolloProvider client={client}>
        <QueryContextProvider value={{ query, setQuery, variables, setVariables, request }}>
          <div className="flex justify-between">
            <Docs />
            <RequestArea startReq={runRequest} />
            <ResponseComponent />
          </div>
        </QueryContextProvider>
      </ApolloProvider>
    </>
  );
}
