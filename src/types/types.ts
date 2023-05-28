export type Dev = {
  name: string;
  pic: string;
  gh: string;
  ln: string;
  text: string;
};

export interface argsType {
  __typename: string;
  name: string;
}
export interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

export interface Type {
  __typename: string;
  name: string;
  description?: string;
  fields: Field[];
}

export interface Field {
  __typename: string;
  name: string;
  description: string;
  type: Type;
}
