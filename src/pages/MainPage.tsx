import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  QueryProvider,
  ResponseComponent,
  VariablesBlock,
  VarsType,
  RequestType,
  RequestEditor,
} from 'components/main';
import { useState, Suspense, useEffect, lazy } from 'react';
import { API_URL } from '_constants/apiUrl';
import DEFAULT_QUERY from '_constants/defaultQuery';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import Spinner from 'components/Spinner';
const Docs = lazy(() => import('components/Docs'));

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default function MainPage() {
  const [query, setQuery] = useState<string>(DEFAULT_QUERY);
  const [variables, setVariables] = useState<VarsType>('{}');
  const [request, setRequest] = useState<RequestType>({});
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const runRequest = () => {
    try {
      console.log(JSON.parse(variables || ''));
      setRequest({ query, variables: JSON.parse(variables || '') });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ApolloProvider client={client}>
        <QueryProvider value={{ query, setQuery, variables, setVariables, request, runRequest }}>
          <div className="grid gap-10 grid-cols-1 mt-6 md:grid-cols-[20%,1fr,1fr]">
            <Suspense fallback={<Spinner />}>
              <Docs />
            </Suspense>
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
