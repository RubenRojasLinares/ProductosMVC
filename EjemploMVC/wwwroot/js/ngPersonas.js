

var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http({
        url: "https://localhost:44323/api/Personas",
        method: 'GET',
        params: {
            nombre: "mando nombre",
            edad: 10,
            mail: 'mandomail'
        }
    }).then(function (response) {
        console.log("saved successfully");
    }, function (response) {
        console.log("Error message");
    });
});