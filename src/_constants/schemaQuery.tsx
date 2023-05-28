export const INTROSPECTION_QUERY = `query IntrospectionQuery {
    __schema {
      queryType {
        fields {
          name
          description
          args {
            name
          }
          type {
            name
          fields {
            name
            description
            type {
              name
              description
            }
          }
          }
        }
      }
    }
  }`;
export default INTROSPECTION_QUERY;
