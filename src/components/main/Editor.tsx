import RequestArea from './RequestArea';
import { StartButton } from './StartButton';
import { VariablesBlock } from './Variables';

export const Editor = () => {
  return (
    <div className="basis-1/3 rounded shadow-md">
      <div className="flex justify-between">
        <RequestArea />
        <StartButton />
      </div>
      <VariablesBlock />
    </div>
  );
};
