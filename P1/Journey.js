/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */
/*          [DIU] UX Toolkit v1.0 2019     */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
		$scope.Grupo_ID ="DIU1.Singapur";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";

		$scope.JourneyIndex = 0;

        $scope.Journeys = [
			{

                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/

				Id: 0,
				Name: "Iñaki Etxebarria",
                Photo: "iñaki.jpg",

                /*** PASO #1: INSPIRACION ***/
                goal1: "Quiere ir a Amsterdam con sus colegas del trabajo para pasar unos días de turismo barato y marcha. Un amigo le ha dicho que en Booking se encuentran sitios a buen precio.",
                touch1: "Móvil",
                feel1: "4",
                con1: "No ha usado nunca Booking y no sabe cómo va a ser la experiencia.",
                ima1: "cartoon-looking.png",

                /*** PASO #2: DECICION ***/
                goal2: "Entra en Booking a buscar habitaciones de hotel baratas para cinco personas.",
                touch2: "Movil (app de Booking)",
                feel2: "1",
                con2: "La interfaz de Booking tiene demasiada información y le cuesta concentrarse.",
                ima2: "cartoon-PCtyping.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Selecciona algunas habitaciones que le parecen bien y se las manda a sus amigos.",
                touch3: "Movil (app de Booking)",
                feel3: "2",
                con3: "La información de los destinos está muy fragmentada.",
                ima3: "cartoon-phoningangry.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Busca servicios de hostelería y ocio noctorno en las proximidades de los hoteles que le han confirmado sus amigos.",
                touch4: "Movil (app de Booking)",
                feel4: "3",
                con4: "Tiene que buscar manualmente en Maps porque Booking no ofrece una lista de locales cercanos.",
                ima4: "cartoon-PChard.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Encuentra dos hosteles en zonas que se ajustan a su rango de precio.",
                touch5: "Movil (app de Booking)",
                feel5: "4",
                con5: "El proceso de pago se le hace complicado y no tiene opciones de pago conjunto.",
                ima5: "cartoon-PCSurprised.png",


                /*** PASO #6: CONCLUSION ***/

                 goal6: "Hace la reserva en el hotel que se encuentra más cerca de la Plaza Dam.",
                touch6: "Movil (app de Booking)",
                feel6: "4",
                con6: "Los hoteles le han salido más caros de lo que esperaba.",
                ima6: "cartoon-phone.png",

			},
			{
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/

				Id: 1,
				Name: "Almudena Smith",
                Photo: "almudena.jpg",

				 /*** PASO #1: INSPIRACION ***/
                goal1: "Necesita alojarse en un hotel en Madrid para un curso anual de psicología familiar. Quiere aprovechar el viaje para reflexionar con su marido sobre si denunciar las prácticas dudosas del Tribunal Supremo.",
                touch1: "Agenda",
                feel1: "2",
                con1: "Necesita un sitio de alojamiento cercano al lugar de celebración del curso.",
                ima1: "cartoon-writting2.png",

                /*** PASO #2: DECICION ***/
                goal2: "Entra a buscar el alojamiento en Booking.",
                touch2: "Agenda",
                feel2: "1",
                con2: "Prefiere ir a una agencia de viajes, pero tiene demasiado poco tiempo con el trabajo como para planteárselo.",
                ima2: "cartoon-looking.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Encuentra algunas habitaciones que le interesan a las afueras de la ciudad.",
                touch3: "Servicio (buscador)",
                feel3: "2",
                con3: "La interfaz de booking es muy compleja y le cuesta navegar.",
                ima3: "cartoon-PCangry.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Le envía la información de las habitaciones a su marido para tener su opinión.",
                touch4: "Servicio (webs de terceros)",
                feel4: "2",
                con4: "Algunas de las habitaciones tienen menos datos de los que les gustaría y deciden descartarlas.",
                ima4: "cartoon-phoning.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Busca los mejor vuelos para la habitación que han decidido.",
                touch5: "Teléfono",
                feel5: "4",
                con5: "Los vuelos son muy caros y las horas no le vienen bien.",
                ima5: "cartoon-writting.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Reserva la habitación y el vuelo.",
                touch6: "Servicio (webs de terceros)",
                feel6: "5",
                con6: "El proceso se le ha hecho complicado, pero al menos ha conseguido lo que buscaba.",
                ima6: "cartoon-resting.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])



