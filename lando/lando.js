
const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};


let data = {
  "races" :[
    {
      name:"Australia 2019",
      position: 12
    },
    {
      name:"Bahrain 2019",
      position: 6
    },
    {
      name:"China 2019",
      position: 18
    },
    {
      name:"Azerbaijan 2019",
      position: 8
    },
    {
      name:"Spain 2019",
      position: null
    },
    {
      name:"Monaco 2019",
      position: 11
    },
    {
      name:"Canada 2019",
      position: null
    },
    {
      name:"France 2019",
      position: 9
    },
    {
      name:"Austria 2019",
      position: 6
    },
    {
      name:"Great Britain 2019",
      position: 11
    },
    {
      name:"Germany 2019",
      position: null
    },
    {
      name:"Hungary 2019",
      position: 9
    },
    {
      name:"Belgiam 2019",
      position: 11
    },
    {
      name:"Italy 2019",
      position: 10
    },
    {
      name:"Singapore 2019",
      position: 7
    },
    {
      name:"Russia 2019",
      position: 8
    },
    {
      name:"Japan 2019",
      position: 11
    },
    {
      name:"Mexico 2019",
      position: null
    },
    {
      name:"USA 2019",
      position: 7
    },
    {
      name:"Brazil 2019",
      position: 8
    },
    {
      name:"Abu Dhabi 2019",
      position: 8
    }
  ]
}

labels = data.races.map((race) => race.name);
positions = data.races.map((race) => race.position);
console.log(positions);

var ctx = document.getElementById('myChart').getContext('2d');

ctx.canvas.width = 300;
ctx.canvas.height = 300;
const graphData = {
  labels: labels,
  datasets: [{
      label: 'Race Position',
      data: positions,
      borderColor: CHART_COLORS.red,
      borderWidth: 1
  }]
}

const config = {
  type: 'line',
  data: graphData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Positions of Lando Norris throughout the 2019 season'
      }
    },
    scales: {
      y: {
        min: 0,
        max: 20,
      }
    }
  },
  
};

var myChart = new Chart(ctx, config);