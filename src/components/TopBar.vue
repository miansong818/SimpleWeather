<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-toolbar
      :color="'deep-purple accent-4'"
      dark
    >
      <v-toolbar-title>
        Simple Weather
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-scale-transition>
        <v-btn
          key="search"
          icon
        >
        <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-scale-transition>
    </v-toolbar>

    <v-card-text>
        <v-row>
          <v-col v-for="city in cities" cols="4" :key="city" class="d-flex child-flex justify-center">
              <v-btn @click="onClick(city)">{{city}}</v-btn>
          </v-col>
        </v-row>
    </v-card-text>
  </v-card>
</template>


<script lang="ts" setup>
import { useWeatherStore } from '@/stores/weather';

const weather = useWeatherStore();
const cities= ['RIO DE JANEIRO', 'BEIJING', 'LOS ANGELES'];
const onClick = (city: string) => {
  weather.getDataByCity(city);
}
</script>
