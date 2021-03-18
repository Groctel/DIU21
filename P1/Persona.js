/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019    */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
        $scope.Grupo_ID ="DIU1.Singapur";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{


                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 0,
				Name: "Iñaki Etxebarria",
				Photo: "iñaki.jpg",
				Quote: "De calidad y barato",
				Age: 27,
				Occupation: "Limpiador de salas de cine",
				Family: "Padres y una hermana de 23 años, novia de 24 años desde hace cinco",
				Location: "Madrid (Getafe)",
				Character: "Prefiere el lujo insustancial antes que utilitario",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs Extrovertido/activo",   Value: 3 },
					{ Name: "Realista/práctico      Vs Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico     Vs Emocional/impulsivo",   Value: 5 },
					{ Name: "Flemático/apático      Vs Colérico/visceral",     Value: 1 }
				],
				Goals: ["Disfrutar del tiempo libre con su novia", "Seguir con su trabajo sin responsabilidades", "Jugar con sus amigos en la consola de última generación"],
				Frustrations: ["Tiene dificultades económicas generales a pesar de tener resueltas sus necesidades básicas.", "Tiene peleas con su novia por temas absolutamente insustanciales", "Lleva un par de meses planteándose su relación", "Se ve que su hermana consigue más que él en la vida y le reconcome", "Su relación se encuentra actualmente atascada porque él no tiene más aspiraciones que seguir como está y su novia quiere estudiar y crecer como persona, lo que le hace sentirse inferior e inseguro de sí mismo."],
				Bio: "Nacido en Getafe en el lecho de una familia de clase media, disfruta de una vida sin complicaciones gracias a su trabajo. No tiene estudios superiores, pues acabó la ESO sin problemas pero prefirió meterse en un grado medio en Instalaciones de Telecomunicaciones porque 'le interesaba más'. Tras descubrir que no era para él, le dio miedo entrar en bachillerato porque tenía que enfrentarse a 'los años perdidos' y acabó trabajando en un cine. Vive con su pareja en el piso de ella desde hace cuatro años y medio. La conoció en el instituo, perdieron el contacto cuando se fue a estudiar al grado y lo retomaron gracias a un evento de Facebook de antiguos alumnos.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 2 }

				],
				Contextos: "Se encuentra en una situación extraña de su vida, en la que se está dando cuenta de que necesita cambiar su filosofía y su forma de afrontar los problemas, pero no se atreve a dar el paso.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Almudena Smith",
				Photo: "almudena.jpg",
				Quote: "El tonto y su dinero están poco tiempo juntos.",
				Age: 51,
				Occupation: "Abogada especialista en derecho familiar",
				Family: "Marido de 52 años desde hace 26, dos hijas de 15 y 22 años",
				Location: "Barcelona (Sabadell)",
				Character: "Más centrada en su carrera que en su familia, de forma que se toma sus hijas como un trabajo.",
				PersonalityTraits: [
					{ Name: "Introvertida/reservada Vs Extrovertida/activa",   Value: 5 },
					{ Name: "Realista/práctica      Vs Intuición/imaginativa", Value: 3 },
					{ Name: "Racional/analitica     Vs Emocional/impulsiva",   Value: 1 },
					{ Name: "Flemática/apática      Vs Colérica/visceral",     Value: 5 }
				],
				Goals: ["Ascender a la directiva de su bufete.", "Comprarse un Tesla con su marido", "Que sus hijas sean registradoras de la propiedad neurocirujana."],
				Frustrations: ["Una de sus hijas quiere estudiar historia del arte", "Las listas del Tribunal Supremo eligen sospechosamente a más hombres que mujeres", "Sus compañeros de trabajo no rinden todo lo que a ella le gustaría", "No está del todo satisfecha con ninguno de sus sistemas de organización digital y los analógicos no le sirven"],
				Bio: "Nacida en Castellón, disfrutó de su infancia en el seno de una familia acomodada. Durante sus años de educación obligatoria, estudió varias extraescolares relacionadas con las artes, animada por sus padres. Se mudó a Barcelona para estudiar Derecho con 18 años y a Sabadell a trabajar en un bufete con 25, donde conoció a su actual marido. Tiene una vida perfectamente estructurada gracias a que mantiene una disciplina organizativa perfecta, tanto que la frontera entre la relación con su familia y su agenda laboral queda algo difusa. Lleva diez años trabajando y escalando puestos en su actual bufete, situado en su ciudad de residencia. Es una persona muy sociable que acostumbra a organizar o asistir a cenas caseras con sus amistades y las de su marido. A pesar del alto estatus de ambos, viven de forma medianamente sencila, sin grandes lujos diarios que perfectamente podrían permitirse, prefiriendo dejar más dinero en ocasiones puntuales (aunque el coche es un capricho que se quieren dar).",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile",       Value: 5 },
					{ Name: "RRSS",         Value: 3 },
					{ Name: "Software",     Value: 4 }

				],
                Contextos:   "En esta época del año se organizan varios cursos a los que asiste para complementar su formación profesional. Le gusta viajar con su marido para aprovechar y hacer algo de turismo el fin de semana después del curso." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)",  Value: 2 },
					{ Name: "Online & Social Media",         Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
