<template>
  <div>
    <p>Dashbord</p>
    <br />
    <button
      @click="alertChartData()"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      data
    </button>
    <div></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getChartData } from './../api/chartsApi'

export default {
  setup() {
    let chartData = ref([])

    const getChartsData = async () => {
      chartData = await getChartData()
    }

    const alertChartData = () => {
      console.log(chartData)
    }

    onMounted(getChartsData)

    return {
      chartData,
      getChartsData,
      alertChartData,
    }
  },
}
</script>

<style module></style>
