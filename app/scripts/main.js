$(document).ready(function(){
'use strict';
$('a').smoothScroll();


var doughnutData = [
    {
        value: 33,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
	/*{
        value: 66,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },*/
]

var context = document.getElementById('skills').getContext('2d');
var skillsChart = new Chart(context).Doughnut(doughnutData);

});