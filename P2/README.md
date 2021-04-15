## DIU - Practica2, entregables

### Ideación
En este punto hemos desarrollado más nuestra investigación sobre booking.com; haciendo particular hincapié en aspectos negativos que no queremos repetir en nuestra app. También analizamos cómo nuestras personas sintetizan su percepción sobre sus respectivos viajes. 
* [Malla receptora de información](https://raw.githubusercontent.com/Groctel/DIU21/master/P2/mallareceptora.png)

![](https://raw.githubusercontent.com/Groctel/DIU21/master/P2/mallareceptora.png)

* [Mapa de empatía: Almudena](https://raw.githubusercontent.com/Groctel/DIU21/master/P2/empathymap_almudena.png)

![](https://raw.githubusercontent.com/Groctel/DIU21/master/P2/empathymap_almudena.png)

* [Mapa de empatía: Iñaki](https://raw.githubusercontent.com/Groctel/DIU21/master/P2/empathymap_inaki.png)

![](https://raw.githubusercontent.com/Groctel/DIU21/master/P2/empathymap_inaki.png)

* Point of View:

| Usuario  | Descripción del usuario                                      | Necesidades                                                  | *Insight*                                                    |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Iñaki**    | Persona joven, no muy acostrumbrada a ningún tipo de papeleo | Alojamiento sin quebraderos de cabeza, quiere llegar a la ciudad sin preocuparse de nada. Necesita que la información del alojamiento sea fácil de entender | Hay que evitar la redundancia con él: por ejemplo, al encontrar y seleccionar una habitación que coincida con sus filtros, cuando reserve esa información debe darse por supuesta. |
| **Almudena** | Persona bien establecida que sabe lo que quiere              | Busca un alojamiento que cumpla sus expectativas y un poco más. No quiere llevarse ninguna sorpresa cuando llegue al alojamiento | No le importa pasar mucho tiempo buscando la habitación perfecta, sin embargo, la aplicación debe estar a la altura devolviendo resultados relevantes a los filtros que ha escogido |


### PROPUESTA DE VALOR
Nuestra propuesta es **Intero:** una app de economía colaborativa basada en el *couchsurfing*. Los usuarios ofrecen sus casas para estancias cortas a viajeros dinámicos que no quieren depender de un hotel. Permite una experiencia sin ataduras, en destinos previamente poco conocidos, por un precio reducido.

La app anima al viaje en rutas con varias paradas, así como a compartir tus viajes con el resto de la comunidad. Nuestro objetivo es poder recorrer España de la forma que queramos, sin importar el tiempo, y haciendo un turismo poco invasivo y de calidad.

* [ScopeCanvas](https://raw.githubusercontent.com/Groctel/DIU21/master/P2/scopecanvas.png)

![](https://raw.githubusercontent.com/Groctel/DIU21/master/P2/scopecanvas.png)


### TASK ANALYSIS

Hemos elegido la herramienta del *task matrix* porque la existencia de dos tipos distintos de usuario (Arrendador y Arrendatario) hace que sea más fácil de leer e interpretar en este formato.



| Tareas                        | Arrendadores   | Arrendatarios |
| ----------------------------- | -------------- | ------------- |
| **Crear cuenta**                  | Low            | Low           |
| **Modificar cuenta**             | Medium         | Medium        |
| **Darse de baja**                 | Low            | Low           |
| **Consultar FAQ**                 | Medium         | Medium        |
| **Crear nueva ruta**              | None           | High          |
| **Marcar ruta como favorita**     | None           | High          |
| **Buscar rutas populares**        | Low            | Medium        |
| **Compartir ruta**                | None           | Medium        |
| **Buscar alojamiento**            | None           | High          |
| **Reservar alojamiento**          | None           | Medium        |
| **Comparar alojamientos**         | Low            | High          |
| **Marcar oferta como favorita**   | None           | Medium        |
| **Valorar alojamiento**           | None           | Medium        |
| **Valorar usuario**               | Medium         | Medium        |
| **Enviar mensaje**                | Medium         | Medium        |
| **Publicar nuevo alojamiento**    | Low            | None          |
| **Crear una ruta aleatoria**      | None           | Low           |
| **Comentar sobre un alojamiento** | None           | Medium        |
| **Comentar sobre un usuario**     | Medium         | Medium        |
| **Hacer un test**                 | None           | Medium        |


### ARQUITECTURA DE INFORMACIÓN

A continuación desarrollamos el *sitemap* y los prototipos de nuestra aplicación. Aunque hemos destacado una división de roles entre arrendador y arrendatario, el usuario siempre puede adoptar cualquiera de los dos roles.

* [Sitemap](https://raw.githubusercontent.com/Groctel/DIU21/master/P2/Sitemap.png)

![](https://raw.githubusercontent.com/Groctel/DIU21/master/P2/Sitemap.png)

* Labelling

| Etiqueta                         | Descripción                                                                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Alojamientos guardados**           | Lista de alojamientos almacenados por el usuario antes de reservalos para no perderlos.                                                                   |
| **Alojamientos publicados**          | Lista de alojamientos cuyos anuncios pertenecen al mismo usuario.                                                                                         |
| **Anuncio de alojamiento**           | Página que lista las características de un alojamiento.                                                                                                   |
| **Búsqueda de alojamientos**         | Lista de alojamientos que cumplen unas condiciones similares.                                                                                             |
| **Comentarios sobre el alojamiento** | Valoraciones de usuarios sobre su estancia en un alojamiento.                                                                                             |
| **Comentarios sobre el usuario**     | Valoraciones de usuarios sobre otro usuario.                                                                                                              |
| **Contacto con el anfitrión**        | Inicio de conversación con un usuario anfitrión sobre un alojamiento publicado.                                                                           |
| **Conversación con usuario**         | Muestra de los mensajes de una conversación con un usuario.                                                                                               |
| **Inicio**                           | Primera pantalla que ve el usuario. Muestra una interfaz para planificar una ruta o el estado de la misma si se encuentra en la fecha de su programación. |
| **Mensajes**                         | Lista de hilos de mensajes intercambiados con otros usuarios.                                                                                             |
| **Perfil de usuario**                | Información sobre un usuario y sus alojamientos.                                                                                                          |
| **Reserva del alojamiento**          | Interfaz de reserva directa de un alojamiento publicado.                                                                                                  |


### [Prototipo Lo-FI Wireframe](https://raw.githubusercontent.com/Groctel/DIU21/master/P2/Wireframe.png)

![](https://raw.githubusercontent.com/Groctel/DIU21/master/P2/Wireframe.png)


### Conclusiones

En esta práctica hemos planteado por primera vez nuestra aplicación. Queda un prototipo bastante bien establecido, y tenemos un rumbo marcado por nuestros análisis previos a páginas similares: sabemos bien qué queremos evitar, y que debemos realzar. 

Estamos procurando mantenernos consistentes con el contenido planteado en la etapa de ideación, propuesta y prototipo. Enfocamos la distribución de la interfaz para construir una experiencia fluida y dinámica por diseño.
