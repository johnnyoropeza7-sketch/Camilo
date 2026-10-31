# Mago Camilo: subir a GitHub

1. Crea un repositorio en GitHub (público) y sube todos estos archivos a la raíz.
2. Settings > Pages > Source: "Deploy from a branch", rama main, carpeta /(root).
3. Tu app queda en https://TU-USUARIO.github.io/TU-REPO/
4. En el iPhone abre ese enlace en Safari > Compartir > "Añadir a pantalla de inicio".

## Claves
- Abre /admin.html (la primera vez creas contraseña; es solo un candado visual).
- Crea una clave por usuario. Copia el contenido de "keys.json" y pégalo en el archivo keys.json del repositorio (lápiz de editar > Commit).
- Para anular una clave: Anular en admin.html y vuelve a subir keys.json. Se aplica la próxima vez que el usuario abra la app con internet.
- Un solo dispositivo: el usuario te envía el "Código de este dispositivo" de su pantalla de acceso; lo escribes al crear la clave.
- El enlace del cómplice se muestra al crear la clave.
