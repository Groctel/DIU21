## DIU - Practica2, entregables

### Ideación
* Malla receptora de información
* Mapa de empatía
* Point of View

| Usuario  | Descripción del usuario                                      | Necesidades                                                  | *Insight*                                                    |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Iñaki    | Persona joven, no muy acostrumbrada a ningún tipo de papeleo | Alojamiento sin quebraderos de cabeza, quiere llegar a la ciudad sin preocuparse de nada. Necesita que la información del alojamiento sea fácil de entender | No le gusta que al encontrar una habitación que coincida con sus filtros, como el número de camas; a la hora de reservar tenga que volver a repetir todos los parámetros. |
| Almudena | Persona bien establecida que sabe lo que quiere              | Busca un alojamiento que cumpla sus expectativas y un poco más. No quiere llevarse ninguna sorpresa cuando llegue al alojamiento | No le importa pasar mucho tiempo buscando la habitación perfecta, sin embargo, la aplicación debe estar a la altura devolviendo resultados según los filtros que ha escogido |


### PROPUESTA DE VALOR
* ScopeCanvas


### TASK ANALYSIS

Hemos elegido la herramienta del task matrix porque existen dos tipos distintos de usuario (Arrendador y Arrendatario) y es más sencillo ver todas las opciones y cuánto se usan de un solo vistazo.

**Leyenda: None/Low/Medium/High**

| Tareas                        | Arrendadores | Arrendatarios |
| ----------------------------- | ------------ | ------------- |
| Crear cuenta                  | L            | L             |
| Modificar cuenta              | M            | M             |
| Darse de baja                 | L            | L             |
| Consultar FAQ                 | M            | M             |
| Crear nueva ruta              | N            | H             |
| Marcar ruta como favorita     | N            | H             |
| Buscar rutas populares        | L            | M             |
| Compartir ruta                | N            | M             |
| Buscar alojamiento            | N            | H             |
| Reservar alojamiento          | N            | M             |
| Comparar alojamientos         | L            | H             |
| Marcar oferta como favorita   | N            | M             |
| Valorar alojamiento           | N            | M             |
| Valorar usuario               | M            | M             |
| Enviar mensaje                | M            | M             |
| Publicar nuevo alojamiento    | L            | N             |
| Crear una ruta aleatoria      | N            | L             |
| Comentar sobre un alojamiento | N            | M             |
| Comentar sobre un usuario     | M            | M             |


### ARQUITECTURA DE INFORMACIÓN

* [Sitemap](https://github.com/Groctel/DIU21/blob/master/P2/Sitemap.png)
* Labelling

| Etiqueta                         | Descripción                                                                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alojamientos guardados           | Lista de alojamientos almacenados por el usuario antes de reservalos para no perderlos.                                                                   |
| Alojamientos publicados          | Lista de alojamientos cuyos anuncios pertenecen al mismo usuario.                                                                                         |
| Anuncio de alojamiento           | Página que lista las características de un alojamiento.                                                                                                   |
| Búsqueda de alojamientos         | Lista de alojamientos que cumplen unas condiciones similares.                                                                                             |
| Comentarios sobre el alojamiento | Valoraciones de usuarios sobre su estancia en un alojamiento.                                                                                             |
| Comentarios sobre el usuario     | Valoraciones de usuarios sobre otro usuario.                                                                                                              |
| Contacto con el anfitrión        | Inicio de conversación con un usuario anfitrión sobre un alojamiento publicado.                                                                           |
| Conversación con usuario         | Muestra de los mensajes de una conversación con un usuario.                                                                                               |
| Inicio                           | Primera pantalla que ve el usuario. Muestra una interfaz para planificar una ruta o el estado de la misma si se encuentra en la fecha de su programación. |
| Mensajes                         | Lista de hilos de mensajes intercambiados con otros usuarios.                                                                                             |
| Perfil de usuario                | Información sobre un usuario y sus alojamientos.                                                                                                          |
| Reserva del alojamiento          | Interfaz de reserva directa de un alojamiento publicado.                                                                                                  |


### [Prototipo Lo-FI Wireframe](https://github.com/Groctel/DIU21/blob/master/P2/Wireframe.png)


### Conclusiones
(incluye valoración de esta etapa)
