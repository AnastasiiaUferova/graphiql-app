import { useTranslation } from 'react-i18next';

export const Docs = () => {
  const { t } = useTranslation();
  return <div className="text-lg font-semibold p-2">{t('mainPage.documents')}</div>;
};
