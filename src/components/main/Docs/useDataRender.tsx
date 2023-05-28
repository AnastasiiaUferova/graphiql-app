import { gql, useQuery } from '@apollo/client';
import { useCallback, useId } from 'react';
import { INTROSPECTION_QUERY } from '_constants/schemaQuery';
import { TreeNode, Type, argsType } from 'types/types';

const useDataRender = () => {
  const { error, data: schemaData } = useQuery(gql(INTROSPECTION_QUERY));
  const id = useId();
  const dataRender: () => TreeNode = useCallback(() => {
    if (schemaData) {
      const dataRendered: TreeNode[] = schemaData.__schema.queryType.fields.map(
        (field: { name: string; description: string; args: argsType[]; type: Type }) => {
          const childrenArg = field.args.map((arg: argsType) => ({
            id: id,
            name: arg.name,
          }));

          const childrenFields =
            field.type.fields &&
            field.type.fields.map((field) => {
              const descriptions = {
                id: id,
                name: field.description,
              };

              const typesDescription = {
                id: id,
                name: field.type.description,
              };

              const types = {
                id: id,
                name: field.type.name,
                children: [typesDescription],
              };

              const names = {
                id: id,
                name: field.name,
                children: [
                  { id: id, name: 'description', children: [descriptions] },
                  { id: id, name: 'type', children: [types] },
                ],
              };
              return names;
            });

          const childrenDescription = [
            {
              id: id,
              name: field.description,
            },
          ];

          const node: TreeNode = {
            id: id,
            name: field.name,
            children: [
              { id: id, name: 'arguments', children: childrenArg },
              { id: id, name: 'description', children: childrenDescription },
              { id: id, name: 'fields', children: childrenFields },
            ],
          };

          return node;
        }
      );
      const result = {
        id: 'myTree',
        name: 'Query',
        children: dataRendered,
      };
      return result;
    }
    return {
      id: 'myTree',
      name: 'Query',
      children: [],
    };
  }, [id, schemaData]);

  return { error, schemaData, dataRender };
};

export default useDataRender;
