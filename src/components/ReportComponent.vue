<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Поиск"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        class="elevation-1"
        multi-sort
        :headers="headers"
        :items="dataTable"
        :search="search"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { GET_REPORT, GET_TABLE, GET_HEADERS_REPORT } from '../store'
export default {
  name: 'HelloWorld',
  data: () => ({
    classs: 'primary',
    dark: true,
    search: ''
  }),
  computed: {
    headers () {
      const headers = this.isData(this.$store.getters[GET_HEADERS_REPORT]) && JSON.parse(localStorage.getItem('reportHeaders'))
      console.log(headers)
      return headers.map((el, index) => {
        const key = Object.keys(el).pop()

        return { text: el[key], value: key, filterable: index === 0 || index === 1 }
      })
    },
    dataTable () {
      const table = this.isData(this.$store.getters[GET_TABLE]) && JSON.parse(localStorage.getItem('reportTable'))

      return table.map(el => el)
    }
  },
  props: {
    msg: String
  },
  methods: {
    isData (data) {
      return (data.length > 0) || data
    }
  },
  mounted () {
    this.$store.dispatch(GET_REPORT, {})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
