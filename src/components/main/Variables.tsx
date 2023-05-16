import { useQueryContext } from './QueryContext';
import { useState } from 'react';

export const VariablesBlock = () => {
  const { setVariables } = useQueryContext();
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div className="relative">
      <p>Variables</p>
      <div
        className="absolute right-4 top-0 cursor-pointer"
        onClick={() => {
          setOpened((prev) => !prev);
        }}
      >
        {!opened ? '\u23f7' : '\u23f6'}
      </div>
      {opened && (
        <label>
          &#123; characterId:
          <input
            className="mx-1"
            size={3}
            onChange={({ target: { value } }) => setVariables({ characterId: value })}
          />
          &#125;
        </label>
      )}
    </div>
  );
};
