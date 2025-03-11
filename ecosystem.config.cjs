module.exports = {
  apps: [
    {
      name: "API",
      script: "./node_modules/.bin/ts-node",
      args: "src/app.ts",
      exec_mode: 'fork',
      watch: false, // Opcional: habilita el modo de vigilancia
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};