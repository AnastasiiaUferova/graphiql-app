import { useEffect, useState } from 'react';
import { useTreeState, Tree } from 'react-hyper-tree';
import { TreeNode } from 'types/types';
import useDataRender from './useDataRender';

const TreeComponent = () => {
  const [data, setData] = useState<TreeNode>({
    id: '0',
    name: 'Query',
  });
  const { error, schemaData, dataRender } = useDataRender();

  useEffect(() => {
    if (schemaData) {
      const data = dataRender();
      setData(data);
    }
  }, [schemaData, dataRender]);

  const { required, handlers } = useTreeState({
    data,
    id: 'myTree',
    refreshAsyncNodes: true,
  });

  if (error) return <p>Error: {error.message}</p>;

  return schemaData && <Tree {...required} {...handlers} />;
};

export default TreeComponent;