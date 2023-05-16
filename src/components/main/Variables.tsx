import { useQueryContext } from './QueryContext';
import { useState, useRef, ChangeEventHandler } from 'react';

const inputClass = 'mx-1 outline-none';

export const VariablesBlock = () => {
  const { setVariables } = useQueryContext();
  const [opened, setOpened] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        if (valueRef.current) {
          setVariables({ [value]: valueRef.current?.value });
        }
        break;
      case 'value':
        if (nameRef.current) {
          setVariables({ [nameRef.current?.value]: value });
        }
        break;
      default:
        throw Error('Undefined error');
    }
  };

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
          &#123;
          <input
            className={inputClass}
            name="name"
            ref={nameRef}
            onChange={handleChange}
            size={nameRef.current?.value.length || 1}
          />
          :
          <input
            className={inputClass}
            size={valueRef.current?.value.length || 1}
            name="value"
            ref={valueRef}
            onChange={handleChange}
          />
          &#125;
        </label>
      )}
    </div>
  );
};
