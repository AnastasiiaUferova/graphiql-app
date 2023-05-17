import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';
import { useEffect, useState } from 'react';
import { buildHTTPExecutor } from '@graphql-tools/executor-http';
import { schemaFromExecutor } from '@graphql-tools/wrap';
import clsx from 'clsx';
import { FC } from 'react';
import { API_URL } from '_constants/apiURL';
import { useQueryContext } from './QueryContext';

const RequestArea: FC<{ className?: string }> = ({ className }) => {
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
    <>
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
    </>
  );
};

export default RequestArea;
