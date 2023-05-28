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
import { Spinner, Modal } from 'components';
const Docs = lazy(() => import('components/Docs'));

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default function MainPage() {
  const [query, setQuery] = useState<string>(DEFAULT_QUERY);
  const [isSyntaxError, setIsSyntaxError] = useState<boolean>(false);
  const [variables, setVariables] = useState<VarsType>('{}');
  const [request, setRequest] = useState<RequestType>({});
  const [user, userLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoading && !user) {
      navigate('/');
    }
  }, [user, userLoading, navigate]);

  const runRequest = () => {
    try {
      setRequest({ query, variables: JSON.parse(variables || '') });
    } catch (err) {
      setShowModal(true);
    }
  };

  return (
    <>
      <ApolloProvider client={client}>
        <QueryProvider
          value={{
            query,
            setQuery,
            variables,
            setVariables,
            request,
            runRequest,
            isSyntaxError,
            setIsSyntaxError,
          }}
        >
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
      {showModal && (
        <Modal message="Variables must be in JSON-format!" onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
