'use strict';
function ClockCtrl($scope){
		$scope.clock = {  };
	    var updateClock = function() {
	    	var s = "";
	    	var cu = new Date();
	    	var x = new Array("Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday","Saturday");
	    	var day = cu.getDay();
	    	var today= x[day];
	    	s +=today +" [ ";
	    	s += cu.getDate() +"/";
	    	s += cu.getMonth() +"/";
	    	s += cu.getFullYear() +"  ";
	    	s += cu.getHours() +":";
	    	s += cu.getMinutes() +":";
	    	s += cu.getSeconds() +" ";
	    	//s += cu.getMilliseconds()+"] ";
	    	s +=cu.toString().match(/\(([A-Za-z\s].*)\)/)[1];
	    	s += "] "
	    	$scope.clock.now=s;
	   
	    };
	    setInterval(function() {
	    	$scope.$apply(updateClock);
	    }, 1000);
	    updateClock();
    
}