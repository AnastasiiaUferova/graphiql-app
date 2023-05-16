import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';
import { useEffect, useState } from 'react';
import { buildHTTPExecutor } from '@graphql-tools/executor-http';
import { schemaFromExecutor } from '@graphql-tools/wrap';
import clsx from 'clsx';
import { useQueryContext } from 'pages/MainPage';
import { VariablesBlock } from './main/Variables';
import { FC } from 'react';
import { API_URL } from '_constants/apiURL';

const RequestArea: FC<{ startReq: () => void; className?: string }> = ({ startReq, className }) => {
  const [graphQLSchema, setGraphQLSchema] = useState<GraphQLSchema>();
  const { query, setQuery } = useQueryContext();

  useEffect(() => {
    const fetchSchema = async () => {
      const remoteExecutor = buildHTTPExecutor({
        endpoint: API_URL,
      });
      const schema = await schemaFromExecutor(remoteExecutor);
      setGraphQLSchema(schema);
    };
    fetchSchema();
  }, []);

  return (
    <div className="relative basis-1/3 rounded shadow-md">
      {graphQLSchema && (
        <CodeMirror
          className={clsx(className)}
          value={query}
          onChange={setQuery}
          extensions={[graphql(graphQLSchema)]}
          height="300px"
          theme="light"
        />
      )}
      <div className="absolute top-4 right-4 cursor-pointer" onClick={startReq}>
        {/* temporary button */}
        play
      </div>
      <VariablesBlock />
    </div>
  );
};

export default RequestArea;
