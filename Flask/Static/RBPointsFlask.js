let week = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
let gameyear = [];
let gameweek = [];
let gamefantasyPoints = [];
let gamerushingyards = [];
let gamerushtds = [];
let gamerecyards = [];
let gamerecTDs = [];
let YearlyFantasyPoints = [];
let YearlyRecievingTDPoints = [];
let YearlyReceptionPoints = [];
let YearlyRushTDPoints = [];

let RBlast5 = '/RB5.json';
let RBbyweek = '/RBPointData.json';
let RBbyYear = '/RBYear.json';


let urls = [RBlast5, RBbyweek, RBbyYear];

function search() {
    let searchInput = document.getElementById('searchInput');
    let searchText = searchInput.value.toLowerCase();
    let promises = urls.map(url => fetch(url).then(response => response.json()));
    

    Promise.all(promises)
    .then(data => {
        console.log(data[2]);
        let points = data[1];
        let keyFound = Object.keys(points).find(key => key.toLowerCase().includes(searchText));
        if (keyFound) {
            plot(keyFound, points[keyFound]);
                let games = data[0];
                let filteredGameData = games[keyFound];
                if (filteredGameData) {
                    gameyear = [];
                    gameweek = [];
                    gamefantasyPoints = [];
                    gamerushingyards = [];
                    gamerushtds = []
                    gamerecyards = [];
                    gamerecTDs = [];
                        // Clearing the arrays
                    filteredGameData.forEach(stats => {
                        gameyear.push(stats[1]);
                        gameweek.push(stats[2]);
                        gamefantasyPoints.push(stats[3]);
                        gamerushingyards.push(stats[4]);
                        gamerushtds.push(stats[5])
                        gamerecyards.push(stats[6]);
                        gamerecTDs.push(stats[7])

                    });
                    metadata(gameyear, gameweek, gamefantasyPoints, gamerushingyards, gamerushtds,gamerecyards,gamerecTDs);
                    let yearstats = data[2];
                    let filteredYearStats = yearstats[keyFound];
                    if (filteredYearStats){
                        YearlyFantasyPoints = [];
                        YearlyRecievingTDPoints = [];
                        YearlyRushTDPoints = [];
                        YearlyReceptionPoints = [];
                  
              
                        filteredYearStats.forEach(points => {
                            console.log(points)
                            YearlyFantasyPoints.push(points.Fantasy_Points)
                            YearlyRushTDPoints.push(points.Rush_TD_Points)
                            YearlyRecievingTDPoints.push(points.Receiving_TD_Points)
                            YearlyReceptionPoints.push(points.Reception_Points)

                          })
                        stackedbar(YearlyRushTDPoints,YearlyRecievingTDPoints,YearlyReceptionPoints)
                }

                          } else {
                console.log('No matching player found');
            }








        } else {
            // Handle case when no matching key is found
        console.log('No matching key found');
        openPopup();
    }})}


    search();



    
        
        
       
           
           
                    
             
           
          
            
   


  


function plot(key, values) {
    let trace1 = {
        x: week,
        y: values,
        type: 'scatter',
        fill: 'tozeroy',
        fillcolor: 'rgba(255, 0, 0, 1)'
    };

   let plotData = [trace1];

   let layout = {
    title: {
        text: `${key} <br><span style ="font-size: 16px;">Points per week (2019-2023)`,
        font:{

            size: 32

        }},
        xaxis: {
            title: 'Week',
            dtick: 1
    },
        yaxis: {
            title: 'Fantasy Points'
        }
    
};

    Plotly.newPlot('plot1', plotData, layout);
}

function metadata(gameyears, gameweek, gameFantasyPoints,gamerushingyards, gamerushtds,gamerecyards,gamerecTDs) {
    let metadataPanel = d3.select("#sample-metadata");
    metadataPanel.html("")
    for (let i = 0; i < gameyears.length; i++) {
        metadataPanel.append("p")
            .html(`<b>Year:</b> ${gameyears[i]}  <b>Game Week:</b> ${gameweek[i]}  <b>Points:</b> ${gameFantasyPoints[i]}  <b>Rushing Yards:</b> ${gamerushingyards[i]}  <b>Rushing TDs:</b> ${gamerushtds[i]} <b>Receiving YDS:</b> ${gamerecyards[i]} <b>Receiving TDS:</b> ${gamerecTDs[i]}`);
    }
}
    //metadataPanel.append("p")
       // .text(`Year: ${gameyears[0]}, GameWeek: ${gameweek[0]}, Points: ${gameFantasyPoints[0]}, PassingYards: ${gamePassingYards[0]}`);
    //metadataPanel.append("p")
       // .text(`Year: ${gameyears[1]}, GameWeek: ${gameweek[1]}, Points: ${gameFantasyPoints[1]}, PassingYards: ${gamePassingYards[1]}`);
   //metadataPanel.append("p")
        //.text(`Year: ${gameyears[2]}, GameWeek: ${gameweek[2]}, Points: ${gameFantasyPoints[2]}, PassingYards: ${gamePassingYards[2]}`);
    //metadataPanel.append("p")
        //.text(`Year: ${gameyears[3]}, GameWeek: ${gameweek[3]}, Points: ${gameFantasyPoints[3]}, PassingYards: ${gamePassingYards[3]}`);
   // metadataPanel.append("p")
        //.text(`Year: ${gameyears[4]}, GameWeek: ${gameweek[4]}, Points: ${gameFantasyPoints[4]}, PassingYards: ${gamePassingYards[4]}`);


 function stackedbar(YearlyRushTDPoints,YearlyRecievingTDPoints,YearlyReceptionPoints) {
    const canvas = document.getElementById('stackedBarChart');
        
            // Check if a chart instance already exists and destroy it
        if (window.stackedBarChart instanceof Chart) {
           window.stackedBarChart.destroy();
        }
        
        
    const context = canvas.getContext('2d');
        
    const data = {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
               label: 'RushTDPoints',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
                data: YearlyRushTDPoints
            }, {
                label: 'ReceivingTDPoints',
               backgroundColor: 'rgba(255, 165, 0, 1)',
                data: YearlyRecievingTDPoints
            }, {
               label: 'ReceptionPoints',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
               data: YearlyReceptionPoints
            }]
        };
        
        const options = {
            plugins: {
                title: {
                    display: true,
                    text: 'Fantasy Points Breakdown (2019-2023)',
                    font: {
                        size: 20, // Set the font size for the title
                        weight: 'bold' // Make the title bold
                    }
                }
            },

            scales: {
                 x: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Year', // Label for the x-axis
                        font: {
                            weight: 'bold' // Make x-axis title bold
                        }
                    }

                },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Fantasy Points', // Label for the x-axis
                        font: {
                            weight: 'bold' // Make x-axis title bold
                        }
                    }
                }
            }
        };
        
            // Create the stacked bar chart
        const stackedBarChart = new Chart(context, {
             type: 'bar',
             data: data,
            options: options
        });
        
            // Store the chart instance in window.stackedBarChart
        window.stackedBarChart = stackedBarChart;
    }
        

function openPopup() {
    document.getElementById('popupContainer').style.display = 'block';
}

function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
}





    