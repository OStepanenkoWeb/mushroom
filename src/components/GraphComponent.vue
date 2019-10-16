<template>
    <v-container>
        <div id="chart">
            <apexchart type="line" height=350 :options="chartOptions" :series="series"/>
        </div>
    </v-container>
</template>

<script>
export default {
  name: 'GraphComponent',
  data: function () {
    return {
      series: [{
        name: 'Камеры',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Динамика',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
      chartOptions: {
        stroke: {
          width: [0, 4]
        },
        title: {
          text: 'Сортность сбора грибов относительно урожайности'
        },
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: ['Камера 01', 'Камера 02', 'Камера 03', 'Камера 04', 'Камера 05', 'Камера 06',
          'Камера 07', 'Камера 08', 'Камера 09', 'Камера 10', 'Камера 11', 'Камера 12'
        ],
        yaxis: [{
          title: {
            categories: ['Камера 01', 'Камера 02', 'Камера 03', 'Камера 04', 'Камера 05', 'Камера 06',
              'Камера 07', 'Камера 08', 'Камера 09', 'Камера 10', 'Камера 11', 'Камера 12']
          }
        }, {
          opposite: true,
          title: {
            text: 'Средняя урожайность'
          }
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
