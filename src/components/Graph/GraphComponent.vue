
<script>
import { Bar } from 'vue-chartjs'
export default {
  name: 'GraphComponent',
  extends: Bar,
  data: () => ({
    datacollection: {
      labels: ['Камера 1', 'Камера 2', 'Камера 3', 'Камера 4', 'Камера 5', 'Камера 6'],
      datasets: [{
        label: '1 Сорт',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '2 Сорт',
        data: [15, 20, 8, 17, 12, 12],
        backgroundColor: [
          'rgba(275, 99, 132, 0.2)',
          'rgba(154, 162, 235, 0.2)',
          'rgba(55, 206, 86, 0.2)',
          'rgba(175, 192, 192, 0.2)',
          'rgba(53, 102, 255, 0.2)',
          'rgba(85, 129, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: 'Урожайность',
        data: [15, 11, 5, 5, 8, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        type: 'line'
      }]
    },
    options: {
      legend: {
        labels: {
          generateLabels (chart) {
            const { data } = chart
            const colorLabel = ['rgba(255, 99, 132, 0.2)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 0.2)']

            if (data.datasets.length) {
              return data.datasets.map(function ({ label }, i) {
                return {
                  text: label,
                  fillStyle: colorLabel[i]
                }
              })
            } else {
              return []
            }
          }
        },
        usePointStyle: true,
        display: true
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }

  }),
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>

<style scoped>

</style>
