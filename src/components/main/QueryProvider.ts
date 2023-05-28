import { Dispatch, SetStateAction, createContext, useContext } from 'react';

interface ContextType {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  variables?: VarsType;
  setVariables: Dispatch<SetStateAction<VarsType>>;
  isSyntaxError: boolean;
  setIsSyntaxError: Dispatch<SetStateAction<boolean>>;
  request: RequestType;
  runRequest: () => void;
}
export type VarsType = string;

export interface RequestType {
  query?: string;
  variables?: Record<string, string>;
}

export const Ctx = createContext<ContextType | undefined>(undefined);

export const useQueryContext = () => {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw Error('component out of context...');
  }
  return ctx;
};

export const QueryProvider = Ctx.Provider;
