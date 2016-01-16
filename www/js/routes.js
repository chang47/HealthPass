angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('start', {
      url: '/start',
      templateUrl: 'templates/start.html',
      controller: 'startCtrl'
    })
        
      
    
      
        
    .state('page1', {
      url: '/page1',
      templateUrl: 'templates/page1.html',
      controller: 'page1Ctrl'
    })
        
      
    
      
        
    .state('page2', {
      url: '/page2',
      templateUrl: 'templates/page2.html',
      controller: 'page2Ctrl'
    })
        
      
    
      
        
    .state('page3', {
      url: '/page3',
      templateUrl: 'templates/page3.html',
      controller: 'page3Ctrl'
    })
        
      
    
      
        
    .state('page4', {
      url: '/page4',
      templateUrl: 'templates/page4.html',
      controller: 'page4Ctrl'
    })
        
      
    
      
        
    .state('page5', {
      url: '/page5',
      templateUrl: 'templates/page5.html',
      controller: 'page5Ctrl'
    })
        
      
    
      
        
    .state('finish', {
      url: '/finish',
      templateUrl: 'templates/finish.html',
      controller: 'finishCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/start');

});