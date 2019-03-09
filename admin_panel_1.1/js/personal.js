// pie charts
new Chart(document.getElementById("pie-chart"), {
  type: 'pie',
  data: {
    labels: ["Girls", "Boys"],
    datasets: [{
      label: "Users",
      backgroundColor: ["#3e95cd", "#8e5ea2",],
      data: [2478,5267]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'statistic of girls to boys on the platform'
    }
  }
});

// bar chart upload

new Chart(document.getElementById("bar-chart1"), {
  type: 'bar',
  data: {
    labels: ["KNUST", "UG", "UDS", "UCC", "Ashesi","Webster", "ANU", "UMT", "AIG", "CSUS", "Islamic U","Methodist", "Penticost", "presby", "CUC", "CIBT", "GIL", "MERITIME", "Blue C"],
    datasets: [
      {
        label: "uploads",
        backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
                          '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                          '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
                          '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A'],
        data: [24,78,52,67,73,44,78,48,43,39,67,90,50,72,23,55,29,80,100]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Stats of uplaod from universities'
    }
  }
});
// bar chart download

new Chart(document.getElementById("bar-chart2"), {
  type: 'bar',
  data: {
    labels: ["KNUST", "UG", "UDS", "UCC", "Ashesi","Webster", "ANU", "UMT", "AIG", "CSUS", "Islamic U","Methodist", "Penticost", "presby", "CUC", "CIBT", "GIL", "MERITIME", "Blue C"],
    datasets: [
      {
        label: "download",
        backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
                          '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                          '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
                          '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A'],
        data: [24,58,52,67,83,44,78,28,43,79,67,90,50,52,23,55,99,80,100]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Stats of uplaod from universities'
    }
  }
});
