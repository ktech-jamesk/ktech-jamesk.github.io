
const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};



labels2019 = data2019.races.map((race) => race.name);
positions2019 = data2019.races.map((race) => race.position);

labels2020 = data2020.races.map((race) => race.name);
positions2020 = data2020.races.map((race) => race.position);

var ctx2019 = document.getElementById('lando2019').getContext('2d');

ctx2019.canvas.width = 300;
ctx2019.canvas.height = 300;
const graphData2019 = {
  labels: labels2019,
  datasets: [{
      label: 'Race Position',
      data: positions2019,
      borderColor: CHART_COLORS.red,
      borderWidth: 1
  }]
}

const config2019 = {
  type: 'line',
  data: graphData2019,
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

var lando2019Chart = new Chart(ctx2019, config2019);

var ctx2020 = document.getElementById('lando2020').getContext('2d');

ctx2020.canvas.width = 300;
ctx2020.canvas.height = 300;
const graphData2020 = {
  labels: labels2020,
  datasets: [{
      label: 'Race Position',
      data: positions2020,
      borderColor: CHART_COLORS.red,
      borderWidth: 1
  }]
}

const config2020 = {
  type: 'line',
  data: graphData2020,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Positions of Lando Norris throughout the 2020 season'
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

var lando2020Chart = new Chart(ctx2020, config2020);