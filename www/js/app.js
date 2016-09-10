(function() { 
    var app = angular.module('starter', ['ionic'])

   app.controller('RedditCtrl',function($scope,$http){
    $scope.posts=[];
    $http.get('https://www.reddit.com/.json')
      .success(function(data){
        console.log(data.data.children);
        $scope.posts=data.data.children;

      });
      

  });
  
    app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })
}()); 