// Fastify Cursor Rule - Enforce error handling
module.exports = {
  meta: { type: 'suggestion', docs: { description: 'Ensure all Fastify route handlers include error handling' } },
  create: (context) => ({ CallExpression: node => node.callee.property?.name === 'route' && !node.arguments[0].properties.some(p => p.key.name === 'handler' && p.value.body.body.some(stmt => stmt.type === 'TryStatement')) && context.report({ node, message: 'Route handler should include error handling' }) })
};