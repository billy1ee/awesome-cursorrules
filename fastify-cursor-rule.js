module.exports = {
  meta: { type: 'suggestion', docs: { description: 'Enforce proper Fastify route handlers' } },
  create: (context) => ({ CallExpression: (node) => node.callee.property?.name === 'route' && 
    (!node.arguments[0]?.properties?.some(p => p.key.name === 'handler') && context.report({ node, message: 'Fastify route must have handler' })) })
};