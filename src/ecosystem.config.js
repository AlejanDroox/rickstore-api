module.exports = {
  apps: [
    {
      name: 'api-whatsapp2',
      args: "src/app.ts",
      script: "./node_modules/.bin/tsm",
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