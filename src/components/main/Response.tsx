import { useQuery, gql } from '@apollo/client';
import Spinner from 'components/Spinner';
import { useQueryContext } from './QueryProvider';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ReactJson from 'react-json-view';

const RickResponse: FC<{ query: string }> = ({ query }) => {
  const {
    request: { variables },
  } = useQueryContext();
  const { data, loading, error } = useQuery(gql(query), { variables });

  const content = loading ? (
    <Spinner />
  ) : error ? (
    <ReactJson src={error} />
  ) : (
    <ReactJson src={data} />
  );
  return <>{content}</>;
};

export const ResponseComponent = () => {
  const { t } = useTranslation();
  const {
    request: { query },
  } = useQueryContext();
  const content = query ? <RickResponse query={query} /> : null;
  return (
    <div>
      <div className="text-lg font-semibold p-2">{t('mainPage.response')}</div>
      {content}
    </div>
  );
};
