# Inicializacion del proyecto jornual app

1. se creo el proyecto de react con vite, se instalaron las dependencias de node

2. lo primero que hacemos es limpiar nuestro directorio con cosas que no necesitamos

3. creamos nuestro componente principal, en este caso JournalApp.jsx y lo asociamos al main

4. creamos nuestros directorios a utilizar , a) auth, b) journal, c) router, d) theme

# Configuracion del React-router

1. (yarn add react-router-dom@6) para instalarlo

2. en la carpeta principal de router creamos AppRouter.jsx para hacer la ruta principal

3. en auth creamos mas directorios: layout,pages y routes; creamos loginpage y registrer page y AppRouter en el mismo auth

4. en journal creamos dos directorios: pages y routes: creamos journalPage y JournalRoutes; despues conectamos tanto las rutas de auth como de journal al directorio principal y posteriormente lo llamamos a un punto alto de nuestra aplicacion, preferiblemente al mas alto en este caso el main

# instalacion y configuracion de material ui

1. (yarn add @mui/material @emotion/react @emotion/styled) para instalarlo

2. (yarn add @mui/icons-material) para instalar los iconos de material

3. empezamos a diseñar pagina de login y registro con la porqueria semantica de material UI , peor que el bro que solo usa divs

4. empezamos a diseñar el journalpage

# instalacion y configuracion de react-redux

1. (yarn add @reduxjs/toolkit react-redux) para instalarlo

2. se creo el directorio store con su archivo store.js correspondiente, luego se le añadio la rama auth e implementamos el archivo authSlice

3. iniciamos el manejo de formulario en el login y añadimos el directorio hooks en la rama de src y pegamos nuestro useForm

# instalacion y configuracion de Firebase

1. (yarn add firebase) para instalar firebase

2. se creo el directorio firebase en la raiz de src y el archivo config.js donde se pego la configuracion proveniente de la misma pagina con alguna smodificaciones para conectarlo a la base de datos

3. se hacen los procesos para el login, register de la aplicacion; archivos usados: firebase: config y provider -- auth:authSlice.js, thunk.js y store.js -- afectando a los archivos loginpage.jsx y registerpage.jsx, y al router.jsx que es el router global se usaron dos cumtom hooks que son useCheckAuth y use . se manejaron los formularios manualmente sin usar librerias de terceros

4. finalmente se trabajo con el logout, en el boton del navbar donde cierra la sesion completamente. Se utilizo el Navbar.jsx, el provider.js y el thunk.js. con eso se culmina todo lo relacionado a la autenticacion a la aplicacion con firebase.

# funcionalidades de la aplicacion

1. se trabajo con la base de datos de fireStore (cloudfirestore) se hace crud para crear una nota, activarla y mostrarla en el menu lateral, una tarea bastante elaborada donde se usan mucho el journal slices y sus reducers junto con los thunks, tambien para editar la nota y cargarla a tiempo real
