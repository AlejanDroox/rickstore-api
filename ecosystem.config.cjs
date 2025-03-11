module.exports = {
  apps: [
    {
      name: 'API',
      script: 'src/app.ts',
      interpreter: 'node',
      interpreter_args: '-r ts-node/register',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};