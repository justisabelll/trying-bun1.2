import home from './index.html';

Bun.serve({
  port: 3000,
  static: {
    '/': home,
  },
  async fetch(req) {
    return new Response('Hello World');
  },
});

console.log('Server is running on port 3000, http://localhost:3000');
