module.exports = function cursorPlugin(fastify, options, done) {
  fastify.decorateRequest('cursor', req => req.query.cursor || null);
  fastify.addHook('onRequest', (req, reply, done) => done());
  done();
}