console.log("sourced");


var myApp=angular.module( 'myApp', [] );



myApp.controller( 'petDisplay', ['$scope', '$http', function($scope, $http){


  var populatePage = function(){
    $http({
      method: "GET",
      url: "/getPets",
    }).then( function(animals){
        $scope.animalRecords = animals.data;
        // console.log(animals.data[0]._id);

      });
  };

  populatePage();


  $scope.adoptAnimal = function(animalId){
    console.log("Sending " + animalId + " for adoption.");
    var sendAnimal = {
      id: animalId
    };
    $http({
      method: "DELETE",
      url: "/adoptAnimal",
      data: sendAnimal,
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    }).then(populatePage());
  };

}]);

myApp.controller( 'petAdd', [ '$scope', '$http', function($scope, $http){

  $scope.addAnimal = function(){

    var newPet = {
      name: $scope.nameIn,
      type: $scope.typeIn,
      age: $scope.ageIn,
      img: $scope.urlIn,
      desc: $scope.descIn
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
    $scope.descIn = '';
  };



}]);

myApp.controller( 'viewChange', ['$scope', function($scope){

  $scope.tabs = [
    {url: 'partials/home.html'},
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
  //STUFF HERE
}]);
