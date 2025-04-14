// Fastify Cursor Rule - Enforce schema validation
module.exports = {
  meta: { type: 'suggestion', docs: { description: 'Ensure Fastify routes include schema validation' } },
  create: (context) => ({ CallExpression: node => node.callee.property?.name === 'route' && !node.arguments[0].properties.some(p => p.key.name === 'schema') && context.report({ node, message: 'Route should include schema validation' }) })
};