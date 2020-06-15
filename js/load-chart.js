google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Data');
    data.addColumn('number', 'Peso');

    data.addRows([
        ['01/05/2019', 93],
        ['02/05/2019', 90],
        ['03/05/2019', 85],
        ['04/05/2019', 87],
    ]);

    var options = {
        hAxis: {
            format: 'h:mm a',
            viewWindow: {
                min: [7, 30, 0],
                max: [17, 30, 0]
            },
        },
        legend: {
            position: 'none',
        },
    };

    var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

    chart.draw(data, options);
}