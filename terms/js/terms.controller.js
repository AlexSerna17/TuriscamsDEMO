
  // Date: 04/11/2016
  //   Empresa: TI Consulting
  //   Created By: José Alejandro Salas Serna  - Dev.
  //   Description: Controlador del modulo de terminos y condiciones



angular.module('terms')
.controller('termsCtrl', function (termsService, $scope, $mdDialog) {
  
  $scope.menuMore = [
    {
      'tittle':'Términos y condiciones',
      'icon': 'home',
    },
    {
      'tittle':'Preguntas frecuentes',
      'icon': 'home',
    },
    {
      'tittle':'Contáctanos',
      'icon': 'home',
    },
    {
      'tittle':'Anúnciate con nosotros',
      'icon': 'home',
    },
    {
      'tittle':'¿Te interesa una cámara?',
      'icon': 'home',
    },
    {
      'tittle':'Promocionamos tu recorrido',
      'icon': 'home',
    },
    {
      'tittle':'Promocionamos tu evento',
      'icon': 'home',
    },
    
  ];

  $scope.giros = [
    'Hospedaje',
    'Transporte',
    'Alientos y bebidas',
    'Entretenimiento',
    'Ocio/relajación',
    'Dependencia gubernamental',
    'Otro'
  ];

  $scope.oneAtATime = true;
  $scope.status  = false;


  $scope.tabs = [
          { 
            title: 'Servicio', 
            faqs: [
                {
                  "question": "¿Cuanto cobran por el servicio?",
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, erat sit amet maximus mollis, nibh orci aliquam eros, sit amet accumsan diam enim in turpis. Phasellus quis lobortis mi, id egestas ligula. Vivamus vestibulum turpis lorem, posuere cursus leo bibendum sit amet. Vivamus a tempor nisl, eu volutpat ex. Donec viverra sem ante, eget ultricies dolor aliquet in."
                },
                {
                  "question": "¿Qué hacer si olvido mi contraseña?",
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, erat sit amet maximus mollis, nibh orci aliquam eros, sit amet accumsan diam enim in turpis. Phasellus quis lobortis mi, id egestas ligula. Vivamus vestibulum turpis lorem, posuere cursus leo bibendum sit amet. Vivamus a tempor nisl, eu volutpat ex. Donec viverra sem ante, eget ultricies dolor aliquet in."
                },
                {
                  "question": "¿Cuanto cobran por el servicio?",
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, erat sit amet maximus mollis, nibh orci aliquam eros, sit amet accumsan diam enim in turpis. Phasellus quis lobortis mi, id egestas ligula. Vivamus vestibulum turpis lorem, posuere cursus leo bibendum sit amet. Vivamus a tempor nisl, eu volutpat ex. Donec viverra sem ante, eget ultricies dolor aliquet in."
                },
                {
                  "question": "¿Qué hacer si olvido mi contraseña?",
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, erat sit amet maximus mollis, nibh orci aliquam eros, sit amet accumsan diam enim in turpis. Phasellus quis lobortis mi, id egestas ligula. Vivamus vestibulum turpis lorem, posuere cursus leo bibendum sit amet. Vivamus a tempor nisl, eu volutpat ex. Donec viverra sem ante, eget ultricies dolor aliquet in."
                },
                {
                  "question": "¿Cuanto cobran por el servicio?",
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, erat sit amet maximus mollis, nibh orci aliquam eros, sit amet accumsan diam enim in turpis. Phasellus quis lobortis mi, id egestas ligula. Vivamus vestibulum turpis lorem, posuere cursus leo bibendum sit amet. Vivamus a tempor nisl, eu volutpat ex. Donec viverra sem ante, eget ultricies dolor aliquet in."
                },
                {
                  "question": "¿Qué hacer si olvido mi contraseña?",
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, erat sit amet maximus mollis, nibh orci aliquam eros, sit amet accumsan diam enim in turpis. Phasellus quis lobortis mi, id egestas ligula. Vivamus vestibulum turpis lorem, posuere cursus leo bibendum sit amet. Vivamus a tempor nisl, eu volutpat ex. Donec viverra sem ante, eget ultricies dolor aliquet in."
                },
                {
                  "question": "¿Cuanto cobran por el servicio?",
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, erat sit amet maximus mollis, nibh orci aliquam eros, sit amet accumsan diam enim in turpis. Phasellus quis lobortis mi, id egestas ligula. Vivamus vestibulum turpis lorem, posuere cursus leo bibendum sit amet. Vivamus a tempor nisl, eu volutpat ex. Donec viverra sem ante, eget ultricies dolor aliquet in."
                },
            ]
          },
          { 
            title: 'Pagos', 
            faqs: [
                {
                  "question": "¿Cuanto cobran por el servicio?",
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, erat sit amet maximus mollis, nibh orci aliquam eros, sit amet accumsan diam enim in turpis. Phasellus quis lobortis mi, id egestas ligula. Vivamus vestibulum turpis lorem, posuere cursus leo bibendum sit amet. Vivamus a tempor nisl, eu volutpat ex. Donec viverra sem ante, eget ultricies dolor aliquet in."
                },
            ]
          },

  ];


  $scope.countries = [
    'México',
    'Alemania',
    'Japón',
    'Italia'
  ];

  $scope.states = [
    'Aguascalientes',
    'Baja California',
    'Sonora',
    'Zacatecas'
  ];

  $scope.municipalities = [
    'Zacatecas',
    'Jerez',
    'Guadalupe',
    'Luis Moya'
  ];



  $scope.user = false;

  $scope.showModal = function(modal,ev) {
    console.log(modal);
    if (modal == 0) {
      $mdDialog.show({
      controller: DialogController,
      templateUrl: '/turislogin/terms/templates/modalTerms.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true // Only for -xs, -sm breakpoints.
      });
    }else if (modal == 1){
      $mdDialog.show({
      controller: DialogController,
      templateUrl: '/turislogin/terms/templates/modalCuestions.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true // Only for -xs, -sm breakpoints.
      });
    }else if (modal == 2){
      $mdDialog.show({
      controller: DialogController,
      templateUrl: '/turislogin/terms/templates/modalContact.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true // Only for -xs, -sm breakpoints.
      });
    }else if (modal == 3){
      $mdDialog.show({
      controller: DialogController,
      templateUrl: '/turislogin/terms/templates/modalAdversiting.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true // Only for -xs, -sm breakpoints.
      });
    }else if (modal == 4){
      $mdDialog.show({
      controller: DialogController,
      templateUrl: '/turislogin/terms/templates/modalCamera.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true // Only for -xs, -sm breakpoints.
      });
    }else if (modal == 5){
      $mdDialog.show({
      controller: DialogController,
      templateUrl: '/turislogin/terms/templates/modalTour.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true // Only for -xs, -sm breakpoints.
      });
    }else if (modal == 6){
      $mdDialog.show({
      controller: DialogController,
      templateUrl: '/turislogin/terms/templates/modalEvent.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true // Only for -xs, -sm breakpoints.
      });
    }else if (modal == 7){
      $mdDialog.show({
      controller: DialogController,
      templateUrl: '/turislogin/terms/templates/modalRating.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true // Only for -xs, -sm breakpoints.
      });
    }
    
  };


  function DialogController($scope, $mdDialog) {
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }


//this service returns terms text
  $scope.getTerms = function(){
      termsService.getTerms()
      .then(function(termsData){
         $scope.termsConditions = termsData;
      });
  }

  $scope.getTerms();



})

.controller('adversitingCtrl', function (termsService,$scope) {

    
  $scope.sendContact = function(){

      
      $scope.advertisingData = {
        "business_name": $scope.contact.name,
        "business_kind": $scope.ctrl.optionsGiro,
        "website_url": $scope.contact.website,
        "country": $scope.ctrl.optionsCountry,
        "state": $scope.ctrl.optionsState,
        "municipality": $scope.ctrl.options,
        "zip": $scope.contact.cp,
        "address": $scope.contact.address,
        "col": $scope.contact.colony,
        "holder_data": {
            "name": $scope.contact.holder,
            "phone": $scope.contact.telephone,
            "email": $scope.contact.email,

        },
        
        "status": "hold",
        "type": "Advertising",

      }

      console.log($scope.advertisingData);
      termsService.postAdvertising($scope.advertisingData);
  }





})

.controller('contactCtrl', function (termsService,$scope,$cookies) {

  var user_info = $cookies.getObject('user_data');
  console.log(typeof(user_info));
  
  if(typeof(user_info) != 'undefined'){

    $scope.contact = {

      "name": user_info.username,
      "email": user_info.email,

    }


  }

  $scope.contactUs = function(){

      
      console.log(
        $scope.contact.name +
       
        $scope.contact.email +

        $scope.contact.message

      );

      // console.log($scope.advertisingData);
      termsService.contactUs($scope.contact.name, $scope.contact.email, $scope.contact.message);
  }





});