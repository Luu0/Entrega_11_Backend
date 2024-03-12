Este proyecto esta pensado para usarse a traves de postman, a continuacion paso sus endpoints y sus funcionalidades.

localhost:8080/users/register (Esta es una vista implementada en la pagina)
Esta es la ruta para que un usuario se registre

localhost:8080/users/login (Esta es una vista implementada en la pagina)
Esta es la ruta para que un usuario se loguee (necesario para acceder a otras rutas) 

localhost:8080/users (Esta es una vista implementada en la pagina)
Esta es la ruta para ver el usuario actualmente logueado (Solamente visible si antes el usuario se logueo) 

Cuenta necesaria para obtener el rol "admin" : email :adminCoder@coder.com
contraseña: adminCod3r123 (cualquier otra cuenta sera puesta con el rol "user")

localhost:8080/api/products (funcion get)
Esta es la ruta para mostrar todos los productos

localhost:8080/api/products (funcion post)
Esta es la ruta para postear productos a traves del body

localhost:8080/products (Esta es una vista implementada en la pagina)

localhost:8080/api/carts (funcion get)
Esta es la ruta para mostrar todos los carts

localhost:8080/api/carts (funcion post)
Esta es la ruta para postear un carrito a traves del body

Todos los otros enrutados de cart y product esten en los archivos productRouter.js 
y cartRouter.js

localhost:8080/chat
Esta es la ruta para ver el chat que solo puede usarlo un usario


localhost:8080/mockingproducts
Trae 100 productos que estan sacados de la api de fakerjs

Actualmente tengo un problema en el enrutado router.get("/:cid/purchase");
que una vez logueado me tira lo siguente:

Error: Invalid login: 535-5.7.8 Username and Password not accepted. For more information, go to
535 5.7.8 https://support.google.com/mail/?p=BadCredentials v19-20020a17090a899300b0029951d04dc4sm5115725pjn.54 - gsmtp
at SMTPConnection._formatError (C:\Users\valen\OneDrive\Escritorio\copia-entrega-8\node_modules\nodemailer\lib\smtp-connection\index.js:790:19)
at SMTPConnection._actionAUTHComplete (C:\Users\valen\OneDrive\Escritorio\copia-entrega-8\node_modules\nodemailer\lib\smtp-connection\index.js:1564:34)
at SMTPConnection. (C:\Users\valen\OneDrive\Escritorio\copia-entrega-8\node_modules\nodemailer\lib\smtp-connection\index.js:546:26)
at SMTPConnection._processResponse (C:\Users\valen\OneDrive\Escritorio\copia-entrega-8\node_modules\nodemailer\lib\smtp-connection\index.js:969:20)
at SMTPConnection._onData (C:\Users\valen\OneDrive\Escritorio\copia-entrega-8\node_modules\nodemailer\lib\smtp-connection\index.js:755:14)
at SMTPConnection._onSocketData (C:\Users\valen\OneDrive\Escritorio\copia-entrega-8\node_modules\nodemailer\lib\smtp-connection\index.js:193:44)
at TLSSocket.emit (node:events:513:28)
at addChunk (node:internal/streams/readable:324:12)
at readableAddChunk (node:internal/streams/readable:297:9)
at Readable.push (node:internal/streams/readable:234:10) {
code: ‘EAUTH’,
response: ‘535-5.7.8 Username and Password not accepted. For more information, go to\n’ +
‘535 5.7.8 https://support.google.com/mail/?p=BadCredentials v19-20020a17090a899300b0029951d04dc4sm5115725pjn.54 - gsmtp’,
responseCode: 535,
command: ‘AUTH PLAIN’
}

