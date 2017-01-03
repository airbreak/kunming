/**
 * Created by jimmy on 16/9/21.
 */
define(['app'],function(app){
    app.controller('docDetailCtrl',['$scope','$stateParams','$filter',function($scope,$stateParams,$filter){
        $scope.id=$stateParams.docid;
        $scope.basicInfo=[{
            name:'发送人',
            val:'张三'
        },{
            name:'发送时间',
            val:'2016年3月3日',
        },{
            name:'说明',
            val:'国家行政学院教授竹立家表示，现在好多人认为农民失了身份就会失地，其实不是这样。居民制度不是剥夺农民的财产，而是给予农民平等的身份，平等的待遇。',
        }];

        $scope.currentProcess=1;
        //选择通过或者退审
        $scope.doChoose=function(index){
            $scope.currentProcess = 2;
            if(index==0){
                $scope.preveResult ='通过';
                $scope.originOption ='同意。';

            }else{
                $scope.preveResult ='退审';
                $scope.originOption ='不同意。';
            }
        };

        $scope.recheck=function(status){
            $scope.currentProcess = status;
        };

        $scope.checkNext=function(){
            $scope.currentProcess = 3;
        }
        $scope.nowTime = $filter("date")(new Date(), "yyyy-MM-dd");
    　

        var arr= [
            { name:'一月',val:0},
            { name:'二月',val:1},
            { name:'三月',val:2},
            { name:'四月',val:3},
            { name:'五月',val:4},
            { name:'六月',val:5},
            { name:'七月',val:6},
            { name:'八月',val:7},
            { name:'九月',val:8},
            { name:'十月',val:9},
            { name:'十一月',val:10},
            { name:'十二月',val:11}
        ];
        $scope.arraydata=arr;
        $scope.indexdata=getIndex();

        var arr1= [
            { name:'2010',val:2010},
            { name:'2011',val:2011},
            { name:'2012',val:2012},
            { name:'2013',val:2013},
            { name:'2014',val:2014},
            { name:'2015',val:2015},
            { name:'2016',val:2016},
            { name:'2017',val:2017},
            { name:'2018',val:2018},
            { name:'2019',val:2019},
            { name:'2020',val:2020}
        ];
        $scope.arraydata1=arr1;
        $scope.indexdata1=getIndex1();

        $scope.showDatePicker=false;
        $scope.openMayiDatePicker=function(){
            $scope.showDatePicker=true;
        };
        $scope.showSelectedDateFn=function(dateStr){
            $scope.nowTime=dateStr;
            $scope.showDatePicker=false;
        };

        $scope.configstyle={
            top:'290px',
            left:'28px'
        };

        function getIndex(){
            var current = getNowDate().month,
                len=arr.length;
            for(var i=0;i<len;i++){
                if(current==arr[i].val){
                    return i;
                }
            }
        }

        function getIndex1(){
            var current = getNowDate().years,
                len=arr1.length;
            for(var i=0;i<len;i++){
                if(current==arr1[i].val){
                    return i;
                }
            }
        }

        function getNowDate(){
            var now=new Date();
            return{
                day:now.getDay(),
                month:now.getMonth(),
                years:now.getFullYear()
            }
        }

        var drag_=false
        var D=new Function('obj','return document.getElementById(obj);')
        var oevent=new Function('e','if (!e) e = window.event;return e');

        var pos=[{
            x:null,
            y:null
        },{
            x:null,
            y:null
        },{
            x:null,
            y:null
        }];

        var totalNum=0;

        $scope.move_obj=function(obj){
            var x,y;
            D(obj).onmousedown=function(e){
                drag_=true;
                var i=0;

                if(obj=='sing-name'){
                    i=0;
                }
                if(obj=='sing-time'){
                    i=1;
                }
                else if(obj=='sing-option'){
                    i=2;
                }

                var tempPos=pos[i];
                if(!tempPos.x){
                    tempPos.x= oevent(e).clientX;
                    tempPos.y= oevent(e).clientY;
                }

                with(this){
                    style.position="absolute";var temp1=offsetLeft;var temp2=offsetTop;
                    style.curson='pointer';
                    x=oevent(e).clientX;y=oevent(e).clientY;
                    document.onmousemove=function(e){
                        if(!drag_)return false;
                        with(this){
                            style.left=temp1+oevent(e).clientX-x-142+"px";
                            style.top=temp2+oevent(e).clientY-y+"px";
                        }
                    }
                }
                document.onmouseup=function(){
                    drag_=false;
                    if(obj=='sing-name'){
                        $scope.singNameFinish=true;
                        totalNum++;
                    }
                    if(obj=='sing-time'){
                        $scope.singTimeFinish=true;
                        totalNum++;
                    }
                    else if(obj=='sing-option'){
                        $scope.singOptionsFinish=true;
                        totalNum++;
                    }
                    if(totalNum==3){
                        $scope.totalCount=3;
                    }
                }
            }
        }

        $scope.resetSingInfo=function(index,id){
            var tempPos=pos[index],
                target=document.getElementById(id);
            target.style.left=tempPos.x+"px";;
            target.style.top=tempPos.y+"px";;
            if(index==0){
                $scope.singNameFinish=false;
            }
            if(index==0){
                $scope.singTimeFinish=false;
            }
            else{
                $scope.singOptionsFinish=false;
            }
        }

        $scope.checkLast=function(){
            $scope.conformBoxStatus=true;
        }

        $scope.hideConformBox=function(index){
            if(index==0) {
                $scope.conformBoxStatus = false;
            }else{
                $scope.finishlastCheck=true;
            }
        };

    }]);
});

