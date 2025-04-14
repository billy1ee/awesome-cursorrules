// Fastify schema validation rule
module.exports = {
  name: 'fastify/require-schema-validation',
  rule: (route) => !route.schema && 'Routes should define schema validation'
};