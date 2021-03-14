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
		$scope.Grupo_ID ="DIU1.ABCDEF";
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
                goal1: "Se encuentra atascado en su relación y quiere escapar un poco de casa. Le ha comentado a su novia que necesita 'ver nuevas tierras para 'aclarar su lugar en este mundo'",
                touch1: "Móvil",
                feel1: "3",
                con1: "Quiere encontrar un lugar al que escaparse pero que el hecho de hacer el viaje no arruíne su relación.",
                ima1: "cartoon-deciding.png",

                /*** PASO #2: DECICION ***/
                goal2: "Decide ir a Amsterdam con sus colegas del trabajo a visitar las coffee shop y el barrio rojo. ",
                touch2: "Movil",
                feel2: "4",
                con2: "Planear el viaje de forma que su novia no conozca algunos de los detalles más escabrosos.",
                ima2: "cartoon-planning.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Decide ir a una agencia de viajes para contratar un hotel para varios.",
                touch3: "Boca a boca",
                feel3: "2",
                con3: "Los destinos que le recomiendan son demasiado caros y lujosos para él.",
                ima3: "cartoon-talking.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Sus colegas le recomiendan una página para escoger alojamientos más acorde al nivel de gastos del grupo.",
                touch4: "Móvil",
                feel4: "4",
                con4: "Lo mejor es que el sitio esté en el centro, cerca de la plaza Dam y que no sea muy caro.",
                ima4: "cartoon-phone-street.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Encuentra dos hostales que se ajustan a su rango de precio.",
                touch5: "Móvil (nuestra app)",
                feel5: "4",
                con5: "No está tan cerca como él querría y su novia sospecha por la ubicación.",
                ima5: "cartoon-deciding2.png",


                /*** PASO #6: CONCLUSION ***/

                 goal6: "Consigue reservar gracias a que la interfaz elimina la barrera del idioma.",
                touch6: "ordenador",
                feel6: "5",
                con6: "Está algo preocupado por su vuelta, pero decide no pensar en ello.",
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
                goal1: "Necesita alojarse en un hotel en Madrid para un curso anual de psicología familiar.",
                touch1: "Agenda",
                feel1: "4",
                con1: "Necesita un sitio de alojamiento cercano al lugar de celebración del curso.",
                ima1: "cartoon-writting2.png",

                /*** PASO #2: DECICION ***/
                goal2: "Buscar el alojamiento en una página de reserva de hoteles.",
                touch2: "Agenda",
                feel2: "3",
                con2: "Prefiere ir a una agencia de viajes, pero tiene demasiado poco tiempo con el trabajo como para planteárselo.",
                ima2: "cartoon-looking.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Busca en varias páginas de viajes un sitio para alojarse con su marido durante la semana del curso para poder hacer un poco de turismo.",
                touch3: "Servicio (buscador)",
                feel3: "2",
                con3: "Las páginas que encuentra tienen una interfaz muy compleja y llena de notificaciones poco fiables sobre la disponibilidad de las habitaciones.",
                ima3: "cartoon-PCangry.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Encuentra algunas habitaciones que le interesan en diferentes páginas.",
                touch4: "Servicio (webs de terceros)",
                feel4: "3",
                con4: "La información es escasa y le parece poco fiable, por lo que decide llamar directamente a los hoteles.",
                ima4: "cartoon-phoning.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Recopila información sobre los diferentes hoteles para elegir el mejor.",
                touch5: "Teléfono",
                feel5: "3",
                con5: "La mayoría de hoteles sólo trabajan por webs externas y su lista se ve enormemente reducida.",
                ima5: "cartoon-writting.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Reserva una habitación en uno de los hoteles de su lista.",
                touch6: "Servicio (webs de terceros)",
                feel6: "4",
                con6: "El proceso se le hace complicado porque las web son muy enrevesadas, pero al menos consigue lo que busca.",
                ima6: "cartoon-resting.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])



