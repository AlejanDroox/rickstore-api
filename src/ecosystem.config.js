module.exports = {
  apps: [
    {
      name: "API",
      script: "./node_modules/.bin/tsm",
      args: "src/app.ts",
      watch: false, // Opcional: habilita el modo de vigilancia
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};