import { useTranslation } from 'react-i18next';
import { useQueryContext } from './QueryProvider';
import RequestArea from './RequestArea';

export const RequestEditor = () => {
  const { runRequest, isSyntaxError } = useQueryContext();
  const { t } = useTranslation();

  const handleRun = () => {
    if (!isSyntaxError) {
      return runRequest();
    }
  };
  return (
    <div className="rounded-t-lg shadow-md p-4">
      <div className="flex justify-between">
        <p className="text-lg font-semibold p-2">{t('mainPage.request')}</p>
        <button
          disabled={isSyntaxError}
          onClick={handleRun}
          className="py-2 px-3 disabled:bg-gray-600 hover:bg-light-blue hover:text-black text-white h-10 bg-dark-blue rounded-md"
        >
          {t('mainPage.runButton')}
        </button>
      </div>
      <RequestArea />
    </div>
  );
};
