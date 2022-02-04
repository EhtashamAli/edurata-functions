const { createGraphQLSchema } = require("openapi-to-graphql");

export const handler = async (event, context, callback) => {
  const apiSchema = event.openApiSchema
  const { schema, report } = await createGraphQLSchema(oas);
  return {
    functions: [],
    resources: []
  }
};
handler({})
