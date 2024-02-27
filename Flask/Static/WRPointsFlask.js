let week = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];


function search() {
    let searchInput = document.getElementById('searchInput');
    let searchText = searchInput.value.toLowerCase();

    d3.json('../static/WRPointData.json').then(function(data) {
        // Find the key matching the search text
        let keyFound = Object.keys(data).find(key => key.toLowerCase().includes(searchText));
        if (keyFound) {
            charts(keyFound, data[keyFound]);
        } else {
            // Handle case when no matching key is found
            console.log('No matching key found');
            openPopup()
        }
    });
}

search();

function charts(key, values) {
    let trace1 = {
        x: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        y: values,
        type: 'scatter'
    };

    let plotData = [trace1];

    let layout = {
        title: `WR points for ${key}`,
        xaxis: {
            title: 'Week',
            dtick:1
        },
        yaxis: {
            title: 'Fantasy Points'
        }

    };

    Plotly.newPlot('plot1', plotData, layout);
}


function openPopup() {
    document.getElementById('popupContainer').style.display = 'block';
  }
  

  function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
  }


