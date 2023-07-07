import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app: any) {
  app.use(
    '/api',  // Replace with your backend API URL prefix
    createProxyMiddleware({
      target: 'http://localhost:8000',  // Replace with your Django backend URL
      changeOrigin: true,
    })
  );
};
