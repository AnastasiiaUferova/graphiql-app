import { FC } from 'react';
import { ReactComponent as SpinnerSVG } from '../assets/spinner.svg';

const Spinner: FC<{ size?: 'small' | 'medium' | 'large'; centered?: boolean }> = ({
  size,
  centered,
}) => {
  return (
    <div className="flex justify-center items-center" role="status">
      <SpinnerSVG
        aria-hidden="true"
        className={'mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
          .concat(centered ? ' h-screen items-center' : '')
          .concat(size === 'large' ? ' w-32 h-32' : size === 'medium' ? ' w-20 h-20' : ' w-8 h-8')}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
