export default {
    apps: [
      {
        name: 'mi-servidor-whatsapp',
        script: 'dist/app.js', // Cambia a la ruta del archivo JavaScript compilado
        instances: 1,
        exec_mode: 'fork',
        watch: false,
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };