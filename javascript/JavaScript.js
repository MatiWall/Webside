
$(function(){
    $("#navigationPanel").load("../html/navigationPanel.html");
});


$(".gridster > ul").gridster({

    widget_margins: [8, 8],

    widget_base_dimensions: [100, 55]

});



var canvas = document.getElementById('chart1').getContext('2 d');

new Chart(canvas, {

    type: 'line',

    data: {

        labels: ["A", "B", "C", "O", "G", "W", "S"],

        datasets: [{

            label: "Company A",

            data: [12, 19, 3, 17, 6, 3, 7],

            backgroundColor: "rgba(182, 213, 139, 0.5)"

        }, {

            label: "Company B",

            data: [2, 29, 5, 5, 2, 3, 10],

            backgroundColor: "rgba(182, 133, 139, 1)"

        }]

    }

});