$(document).ready(function()
{var plot1 = $.jqplot('holder',
[[['0 : Passed Test Cases',0],
['1 : Failed Test Cases',1],
['0 : Skipped Test Cases',0],
['0 : Stopped Test Cases',0]]],
 {gridPadding: {top:0,             bottom:0,             left:0,            right:0        },
seriesDefaults:{            renderer:$.jqplot.PieRenderer,   
 trendline:{                show:false            },  
rendererOptions: {                padding: 10,                showDataLabels: true,                dataLabelThreshold:1,                dataLabelNudge: 50,                seriesColors: ['#A2BF2F', '#BF2F2F', 'C1BF2F', '#2F69BF']                ,                startAngle:165,                shadowOffset:1,                shadowAlpha:0.02,                sliceMargin:2.5            }        },
grid: { background: '#ffffff'},        legend:{            show:true,            location:'e'        }          });});
