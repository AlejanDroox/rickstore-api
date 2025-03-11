module.exports = {
  apps: [
    {
      name: "API",
      script: "./node_modules/.bin/tsm",
      args: "src/app.ts",
      instances: 'max',
      exec_mode: 'cluster',
      watch: false, // Opcional: habilita el modo de vigilancia
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};