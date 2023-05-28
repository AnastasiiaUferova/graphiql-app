const DEFAULT_QUERY = `query Character($id:ID!) {
  character(id:$id) {
    name
    id
  }
  }`;

export default DEFAULT_QUERY;
