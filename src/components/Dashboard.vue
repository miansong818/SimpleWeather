<template>
  <v-card class="mx-auto" color="grey-lighten-3" max-width="448">
  <TopBar/>
    <v-layout>
      <v-main>
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="{name, title} in cards"
              :key="name"
              cols="12"
            >
              <v-card
                :max-height="500"
              >
              <v-card-title> {{title}} </v-card-title>
              <v-divider></v-divider>

              <NextHours v-if="name === 'hour'" :hourly="hourly"/>
              <NextDays v-if="name === 'day'" :daily="daily"/>

              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <Footer />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script lang="ts" setup>
import { useWeatherStore } from '@/stores/weather'
import { storeToRefs } from 'pinia'

const weatherStore = useWeatherStore()

const {daily, hourly} = storeToRefs(weatherStore)
// API key is not working, got 401 error from the response.
onMounted(() => {
  // Fetch and store data to the weather Store
  weatherStore.getData()
})


  const cards = [
    {name:'hour', title:'Next hours'},
    {name:'day', title:'Next 5 days'}
  ]
</script>