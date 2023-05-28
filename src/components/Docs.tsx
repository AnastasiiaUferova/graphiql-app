import { useTranslation } from 'react-i18next';
import Spinner from './Spinner';
import { Suspense, lazy } from 'react';
const TreeComponent = lazy(() => import('./main/Docs/Tree'));

const Docs = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold p-2">{t('mainPage.documents')}</h1>
      <Suspense fallback={<Spinner />}>
        <TreeComponent />
      </Suspense>
    </div>
  );
};

export default Docs;
