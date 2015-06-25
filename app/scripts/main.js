$(document).ready(function(){
	'use strict';
	
	$('a').smoothScroll();
	
	
	var progress = $('.progress');
	var jqueryProgress = $(progress);
	
	$(jqueryProgress).each(function() {
	
		var progressId = $(this).attr("id");
		var progressValue = $(this).find('.progress-bar').attr('aria-valuenow');
		
		$(this).replaceWith('<canvas id = "' + progressId + '" width="100" height="100"></canvas>');
				
		var context = document.getElementById(progressId).getContext('2d');
		
		var data = [
		{
			value: progressValue,
			color:"#A92443"
		},
		{
			value: 50,
			color: "#4e5d6c"
		}
		]

		var myChart = new Chart(context).Doughnut(data, {
			segmentShowStroke : false,
			percentageInnerCutout : 80,
			animateRotate : false,
			showTooltips: false
		});
	});

});