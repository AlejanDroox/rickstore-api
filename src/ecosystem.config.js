module.exports = {
    apps: [
      {
        name: 'mi-servidor-whatsapp',
        script: './app.ts', // Asegúrate de que este sea el archivo correcto
        instances: 1,
        exec_mode: 'fork', // O 'cluster' si quieres usar múltiples instancias
        watch: false, // Cambia a true si deseas reiniciar en cambios
        env: {
          NODE_ENV: 'production', // Puedes agregar otras variables de entorno si es necesario
        },
      },
    ],
  };