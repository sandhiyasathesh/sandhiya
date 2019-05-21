var drawChart = function(){
	var ticks = [];
	var s1 = [];
	var s2 = [];
	var s3 = [];
	var s4 = [];
	var ymax = 0; // this value is used for setting the max value on Y axis
	
	var i = 0;
	// passed tests
	$("#CompleteExecReports tbody tr td:nth-child(4)").each( function(){
		//add item to array
		var txt = $(this).text().trim();
		
		//console.log("txt = " + txt);
		
		txt = txt.substring(0, txt.indexOf("-") - 1);
		
		//console.log("txt = " + txt);
		
		if(txt > ymax){
			ymax = txt;
		}
		
		s1.push( txt ); 

		i++;
		if(i == 5){
			return false;
		}
	});		
	
	i = 0;
	// failed tests
	$("#CompleteExecReports tbody tr td:nth-child(5)").each( function(){
		//add item to array
		var txt = $(this).text().trim();
		
		//console.log("txt = " + txt);
		
		txt = txt.substring(0, txt.indexOf("-") - 1);
		
		//console.log("txt = " + txt);
		
		if(txt > ymax){
			ymax = txt;
		}
		
		s2.push( txt ); 

		i++;
		if(i == 5){
			return false;
		}
	});	
	
	i = 0;
	// skipped tests
	$("#CompleteExecReports tbody tr td:nth-child(6)").each( function(){
		//add item to array
		var txt = $(this).text().trim();
		
		//console.log("txt = " + txt);
		
		txt = txt.substring(0, txt.indexOf("-") - 1);
		
		//console.log("txt = " + txt);
		
		if(txt > ymax){
			ymax = txt;
		}
		
		s3.push( txt ); 

		i++;
		if(i == 5){
			return false;
		}
	});
	
	i = 0;
	// Stopped tests
	$("#CompleteExecReports tbody tr td:nth-child(7)").each( function(){
		//add item to array
		var txt = $(this).text().trim();
		
		//console.log("txt = " + txt);
		
		txt = txt.substring(0, txt.indexOf("-") - 1);
		
		//console.log("txt = " + txt);
		
		if(txt > ymax){
			ymax = txt;
		}
		
		s4.push( txt ); 

		i++;
		if(i == 5){
			return false;
		}
	});	
	
	
	i = 0;
	// ticks for X axis
	$("#CompleteExecReports tbody tr td:nth-child(1)").each( function(){
		//add item to array
		var txt = $(this).text().trim();
		
		//console.log("txt = " + txt);
		
		//txt = txt.substring(0, txt.indexOf("-") - 1);
		
		//console.log("txt = " + txt);
		
		ticks.push( txt ); 

		i++;
		if(i == 5){
			return false;
		}
	});	
	
	ymax++;
	
	console.log("s1 = " + s1);
	console.log("s2 = " + s2);
	console.log("s3 = " + s3);
	console.log("s4 = " + s4);
	
	jQuery("#chart").html('');
	
	plot2 = $.jqplot('chart', [s1, s2, s3, s4], 
						{	animate:true,
							seriesDefaults: { renderer:$.jqplot.BarRenderer, pointLabels: { show: true  } },
							series: [ 	{ label: 'Passed Test Cases'  }, 
										{ label: 'Failed Test Cases'  }, 
										{ label: 'Skipped Test Cases'  }, 
										{ label: 'Stopped Test Cases'  }  ],
							axes: 	{	xaxis: {	label: 'Executions', 
												renderer: $.jqplot.CategoryAxisRenderer,
												rendererOptions:{ varyBarColor : true },  
												ticks: ticks},
										yaxis:{label: 'Test Cases', showTicks: false, min: 0, max: ymax} },
							grid: 	{ 	background: '#ffffff',    
										drawGridLines: true,   
										gridLineColor: '#cccccc',   
										borderColor: '#cccccc',
										borderWidth: 0.5,  
										shadow: true,  
										shadowOffset: 1,  
										shadowWidth: 0.2,  
										shadowDepth: 0.2 },
							legend: { 	show: true, 
										placement: 'outsideGrid',  
										location:'e' },
							seriesColors: [ "#A2BF2F", "#BF2F2F", "C1BF2F", "#2F69BF"],
							highlighter: {show: true}
						}
					);
				
	$('chart').height($('#ParentElement').height() * 0.96);
	$('chart').width($('#ParentElement').width() * 0.96);
	
	//console.log("chart drawn");
}

$(document).ready(drawChart);
