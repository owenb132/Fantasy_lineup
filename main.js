var app = angular.module("mouseOver", []);

// app.controller('mouseOver', function($scope){
//   $scope.view = {};
//   $scope.view.enterCount = 0;
//   console.log($scope.view.enterCount);
// })

app.controller('color', function($scope, $rootScope, $timeout){
  $scope.colorz = {};
  $scope.colorz.myColor = 'white';
  $scope.colorz.enterCount = 0;
  // console.log('rootScope: ',$rootScope);
  var arrayz = []
 $scope.colorz.rando =  function() {
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6-x.length);
    var z = "000000";
    var z1 = z.substring(0,y);
    var color = "#" + z1 + x;
    arrayz.push(color)
    $scope.colorz.myColor = color
  }

  var replaying = false;

  $scope.replay = function() {
    var displayPrevColor = function() {
      if (arrayz.length >= 0) {
        $scope.colorz.myColor = arrayz.pop()
        // do some logic to change color
        // if done replay colors
        replaying = false;
      }else{
        // else
        return false
      }
      $timeout(displayPrevColor, 1000);
      // end if/else
    };
    if (!replaying) {
      replaying = true;
      // This timeout starts the timeout loop
      $timeout(function() { displayPrevColor(); }, 500);
    }
  };
})

//******************************************************//
app.controller('ngSubmit', function($scope, $rootScope, $timeout){
  $scope.favoriteForm = {};
  $scope.submitFav = function() {
    var favPi = parseFloat($scope.favoriteForm.favoritePie);
    // Special output if the favorite pie is a certain number
    if (!isNaN(favPi) && favPi >= 3.14 && favPi <= 3.142) {
      $scope.favoriteForm.favoritePie = "\u03A0";
    }
    console.log("Your favorite pie is: ", $scope.favoriteForm.favoritePie);
  };
})

//******************************************************//

app.controller('addy_form', function($scope, $rootScope, $timeout){
  $scope.addy_form = {};
  $scope.submitAdd = function() {
    var streets = parseFloat($scope.addy_form.street);
    // Special output if the favorite pie is a certain number
    if (!isNaN(streets) && streets >= 3.14 && streets <= 3.142) {
      $scope.addy_form.street = "\u03A0";
    }
    console.log("Your addy is: ", $scope.addy_form.street);
  };
})
