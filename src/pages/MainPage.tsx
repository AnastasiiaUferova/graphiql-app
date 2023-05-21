import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  Docs,
  QueryProvider,
  ResponseComponent,
  VariablesBlock,
  VarsType,
  RequestType,
  RequestEditor,
} from 'components/main';
import { useState, useEffect } from 'react';
import { API_URL } from '_constants/apiUrl';
import DEFAULT_QUERY from '_constants/defaultQuery';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default function MainPage() {
  const [query, setQuery] = useState<string>(DEFAULT_QUERY);
  const [variables, setVariables] = useState<VarsType | undefined>({ id: '2' });
  const [request, setRequest] = useState<RequestType>({});
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const runRequest = () => {
    setRequest({ query, variables });
  };

  return (
    <>
      <ApolloProvider client={client}>
        <QueryProvider value={{ query, setQuery, variables, setVariables, request, runRequest }}>
          <div className="grid gap-10 grid-cols-1 mt-6 md:grid-cols-[20%,1fr,1fr]">
            <Docs />
            <div>
              <RequestEditor />
              <VariablesBlock />
            </div>
            <ResponseComponent />
          </div>
        </QueryProvider>
      </ApolloProvider>
    </>
  );
}
