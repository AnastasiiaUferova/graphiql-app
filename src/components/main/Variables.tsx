import { useQueryContext } from './QueryProvider';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CodemirrorEditor from '@uiw/react-codemirror';
import { jsonLanguage } from '@codemirror/lang-json';

export const VariablesBlock = () => {
  const { setVariables, variables } = useQueryContext();
  const [opened, setOpened] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <div className="rounded-b-lg shadow-md p-4">
      <div className="flex justify-between">
        <p className="text-lg font-semibold p-2">{t('mainPage.variables')}</p>
        <div
          className="mr-2 cursor-pointer"
          onClick={() => {
            setOpened((prev) => !prev);
          }}
        >
          {!opened ? '\u23f7' : '\u23f6'}
        </div>
      </div>
      {opened && (
        <CodemirrorEditor extensions={[jsonLanguage]} value={variables} onChange={setVariables} />
      )}
    </div>
  );
};
