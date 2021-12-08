module.exports = ({ env }) => ({
  host: process.env.HOST,
  port: process.env.PORT,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5b931f85088a0780c9af45f01ecad22c'),
    },
  },
});
