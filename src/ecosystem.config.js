module.exports = {
  apps: [
    {
      name: 'api-whatsapp2',
      script: 'dist/app.js',
      instances: 'max',
      exec_mode: 'cluster',
      watch: true,
      env: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
    },
  ],
};