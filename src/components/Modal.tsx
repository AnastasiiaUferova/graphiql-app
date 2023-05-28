import { FC } from 'react';

export const Modal: FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 border-solid bg-light-gray px-8 pb-8 pt-10 shadow-md z-50 animate-grow">
      <div className="absolute top-3 end-4 cursor-pointer" onClick={onClose}>
        &#10060;
      </div>
      <div>{message}</div>
    </div>
  );
};
