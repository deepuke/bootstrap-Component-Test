angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AlertDemoCtrl', function($scope) {
    var _self = this;
    this.alerts = [{
        type: 'danger',
        msg: 'Oh snap! Change a few things up and try submitting again.',
        timeout: '1000'
    }, {
        type: 'success',
        msg: 'Well done! You successfully read this important alert message.',
        timeout: '2000'
    }];

    this.addAlert = function() {
        this.alerts.push({
            msg: 'Another alert!',
            timeout: 6000
        });
    };


});
angular.module('ui.bootstrap.demo').directive('custAlert', function() {
    return {
        restrict: 'EA',
        templateUrl: 'template/alert/alert.html',
        scope: {
            alerts: '='
        },
        controller: function($scope) {
            var _self = this;
            init();

            function init() {
                console.log(_self.alerts);
                console.log('alert controller initiated');
            }

            this.closeAlert = function(index) {
                this.alerts.splice(index, 1);
            };
        },
        controllerAs: 'ctrl',
        bindToController: true
    }
});









angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function($scope, $modal, $log) {

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.open = function(size) {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function($scope, $modalInstance, items) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function() {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
});
