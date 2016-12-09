//Módulo de home
// angular.module('home', ['ngMaterial','menufilters','filters','tabbar']);
//Módulo de listado de IETR  con la inyección de menú
angular.module('filters', []);

//Módulo de menu para el listado de IETR
angular.module('menufilters',[]); 
// angular.module('menufilters',['ngAnimate', 'ngTouch']); 

angular.module('facebook', ['ngCookies']);

// angular.module('weather',[]);

// angular.module('terms', ['ngMaterial','ngMessages', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('terms',['ionic', 'ionic-material']);

angular.module('tabbar', []);

// angular.module('ranking', ['ngAnimate', 'ngSanitize', 'ui.bootstrap','ngCookies']);

angular.module('map', []);

// angular.module('pics', ['ngMaterial', 'ngAnimate', 'ngSanitize', 'ngAria']);

// angular.module('ietr', ['ngMaterial', 'ngAnimate', 'ngSanitize','ngAria']);

// angular.module('flickr', ['angularGrid','ngMaterial', 'ngMessages' ]);

// angular.module('histories',['ngMaterial','hm.readmore']);

// angular.module('share', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);