import { useQueryContext } from './QueryContext';

export const StartButton = () => {
  const { runRequest } = useQueryContext();
  return (
    <div className="cursor-pointer" onClick={runRequest}>
      {/* temporary button */}
      play
    </div>
  );
};
