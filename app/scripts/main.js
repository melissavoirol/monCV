$(document).ready(function(){
	'use strict';
	
	//Défilement fluide sur tous les liens
	$('a').smoothScroll();
	
	
	//Récupère l'élément progress
	var progress = $('.progress');
	//Stocke cet élément dans une variable
	var jqueryProgress = $(progress);
	
	//Pour chaque élément progress
	$(jqueryProgress).each(function() {
	
		//Récupère l'id
		var progressId = $(this).attr("id");
		//Récupère la valeur
		var progressValue = $(this).find('.progress-bar').attr('aria-valuenow');
		
		//Remplace l'élément progress (barre de progression) par un élément canvas (diagramme)
		$(this).replaceWith('<canvas id = "' + progressId + '" width="100" height="100"></canvas>');
				
		//Récupère l'id de l'élément et le stock dans une variable
		var context = document.getElementById(progressId).getContext('2d');
		
		//Les données du graphique
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

		//Nouveau graphique selon données et différentes options ci-dessous
		var myChart = new Chart(context).Doughnut(data, {
			segmentShowStroke : false,
			percentageInnerCutout : 80,
			animateRotate : false,
			showTooltips: false
		});
	});

});
