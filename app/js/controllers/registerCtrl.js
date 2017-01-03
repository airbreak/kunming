/*
 *登录功能
 */
define([
    'app',
    'errortip',
    'footer',
    'registerService'
], function(app) {

    app.controller('registerCtrl', ['$scope','registerService',function($scope,service) {

            $scope.isAgreed=false;
            $scope.sureAgreed=false;
            $scope.validInfo=[
                {
                    tips:'',
                    status:true
                },
                {
                    tips:'',
                    status:true
                },
                {
                    tips:'',
                    status:true
                },
                {
                    tips:'',
                    status:true
                },
                {
                    tips:'请选择身份证照',
                    status:true
                },
                {
                    tips:'请选择电子签名',
                    status:true
                }
            ];

            //
            $scope.focus = function(index) {
                $scope.validInfo[index].status = true;
            };

            $scope.register=function(){
            var result=service.validatorForm(0,$scope.name),
                result1=service.validatorForm(1,$scope.mobile),
                result2=service.validatorForm(2,$scope.pwd);
            if(!result.flag){
                $scope.validInfo[0].status=false;
                $scope.validInfo[0].tips=result.tips;
            }
            if(!result1.flag){
                $scope.validInfo[1].status=false;
                $scope.validInfo[1].tips=result1.tips;

            }
            if(!result2.flag){
                $scope.validInfo[2].status=false;
                $scope.validInfo[2].tips=result2.tips;
            }
        };

            $scope.doAgree=function(){
                $scope.isAgreed=!$scope.isAgreed;
            };

            $scope.doSureAgreed=function(){
                $scope.sureAgreed=!$scope.sureAgreed;
            };

    	}
    ]);
});
