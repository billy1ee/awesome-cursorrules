// Fastify Cursor Rule - Enforce proper reply handling
module.exports = {
  meta: { type: 'suggestion', docs: { description: 'Ensure all Fastify route handlers include reply' } },
  create: (context) => ({ CallExpression: node => node.callee.property?.name === 'route' && !node.arguments[0].properties.some(p => p.key.name === 'handler' && p.value.params.some(param => param.name === 'reply')) && context.report({ node, message: 'Route handler must use reply parameter' }) })
};