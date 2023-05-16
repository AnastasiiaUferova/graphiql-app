import { useQuery, gql } from '@apollo/client';
import { useQueryContext } from './QueryContext';
import { FC } from 'react';

const RickResponse: FC<{ query: string }> = ({ query }) => {
  const {
    request: { variables },
  } = useQueryContext();
  const { data, loading, error } = useQuery(gql(query), { variables });

  const content = loading ? (
    <div>...loading</div>
  ) : error ? (
    <div>{JSON.stringify(error, null, 2)}</div>
  ) : (
    <div>{JSON.stringify(data, null, 2)}</div>
  );
  return <>{content}</>;
};

export const ResponseComponent = () => {
  const {
    request: { query },
  } = useQueryContext();
  const content = query ? <RickResponse query={query} /> : null;
  return <div className="basis-1/3">{content}</div>;
};
