(function() {
angular.module('app', [])
    .directive('navLinks', functon() {
        return {
            restrict: 'E',
            templateUrl: '/templates/directives/nav-links.html'
        }
    })
})();