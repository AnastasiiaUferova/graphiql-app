import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Docs } from 'components/Docs';
import { ResponseComponent } from 'components/main/Response';
import { Dispatch, SetStateAction, createContext, useState, useContext } from 'react';
import RequestArea from 'components/RequestArea';
import { API_URL } from '_constants/apiURL';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

interface ContextType {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  variables?: VarsType;
  setVariables: Dispatch<SetStateAction<VarsType | undefined>>;
  request: RequestType;
}
export interface VarsType {
  characterId: string;
}
export interface RequestType {
  query?: string;
  variables?: VarsType;
}

export const Ctx = createContext<ContextType | undefined>(undefined);

export const useQueryContext = () => {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw Error('component out of context...');
  }
  return ctx;
};

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
        <Ctx.Provider value={{ query, setQuery, variables, setVariables, request }}>
          <div className="flex justify-between">
            <Docs />
            <RequestArea startReq={runRequest} />
            <ResponseComponent />
          </div>
        </Ctx.Provider>
      </ApolloProvider>
    </>
  );
}
