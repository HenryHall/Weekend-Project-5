console.log("sourced");


var myApp=angular.module( 'myApp', [] );



myApp.controller( 'petDisplay', ['$scope', '$http', function($scope, $http){


  var populatePage = function(){
    $http({
      method: "GET",
      url: "/getPets",
    }).then( function(animals){
        $scope.animalRecords = animals.data;

      });
  };
populatePage();

}]);


var animalPageData;

myApp.controller( 'petAdd', [ '$scope', '$http', function($scope, $http){

  $scope.addAnimal = function(){

    var newPet = {
      name: $scope.nameIn,
      type: $scope.typeIn,
      age: $scope.ageIn,
      img: $scope.urlIn
    }

    $http({
      method: "POST",
      url: "/addPets",
      data: newPet
    });
    $scope.nameIn = '';
    $scope.typeIn = '';
    $scope.ageIn = '';
    $scope.urlIn = '';
  };



}]);

myApp.controller( 'viewChange', ['$scope', function($scope){
  // $scope.newView = "'" + "partials/animalTable.html" + "'";

  $scope.tabs = [
    {url: 'partials/animalTable.html'},
    {url: 'partials/animalAdd.html'}
  ];

  $scope.activeTab = $scope.tabs[0];

  $scope.tabSelect = function(requestedTab){
    $scope.activeTab = $scope.tabs[requestedTab];
  };


}]);

myApp.controller( 'petSearch', [ '$scope', '$http', function( $scope, $http ){
  // get user input on button click

}]);
