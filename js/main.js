/*------------------------------------*\
    $MAIN JS FILE
\*------------------------------------*/

angular.module("fixtr.factory", []).factory("getTeams", function ($http) {
  return {
    bayern: function () {
      return $http.get("./bayern.json");
    },
    chelsea: function () {
      return $http.get("./chelsea.json");
    }
  }; 
});

angular.module("fixtr", ['fixtr.factory']).controller("MainController", function ($scope, getTeams) {
  var getBayern = getTeams.bayern(),
      getChelsea = getTeams.chelsea();

  getBayern.success(function (res) {
    $scope.teamBayern = {
      team: res.data.team,
      games: res.data.games,
      goalkeepers: _.where(res.data.squad, { 'position': 'GK', 'primary': true }),
      defenders: _.where(res.data.squad, { 'position': 'DF', 'primary': true }),
      midfielders: _.where(res.data.squad, { 'position': 'MF', 'primary': true }),
      forwards: _.where(res.data.squad, { 'position': 'FW', 'primary': true })
    };
  });

  getChelsea.success(function (res) {
    $scope.teamChelsea = {
      team: res.data.team,
      games: res.data.games,
      goalkeepers: _.where(res.data.squad, { 'position': 'GK', 'primary': true }),
      defenders: _.where(res.data.squad, { 'position': 'DF', 'primary': true }),
      midfielders: _.where(res.data.squad, { 'position': 'MF', 'primary': true }),
      forwards: _.where(res.data.squad, { 'position': 'FW', 'primary': true })
    };
  });

  $scope.splitter = function (input, item) {
    item = input.split(" ");
    if (input.indexOf(' ') >= 0) {
      return _.last(item);
    } else {
      return item[0];
    }
  }

  $scope.currentBayernTab = "./js/templates/bayern-games.html";
  $scope.currentChelseaTab = "./js/templates/chelsea-games.html";

  $scope.bayernTab = function (tab) {
    $scope.currentBayernTab = tab;
  }

  $scope.chelseaTab = function (tab) {
    $scope.currentChelseaTab = tab;
  }

  $scope.onLeft = false;
  $scope.onRight = false;

});
