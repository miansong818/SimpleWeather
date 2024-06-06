<template>
  <v-container fluid color="grey-lighten-3" max-width="448">
          <v-row class="d-flex">
            <v-col
              v-for="{time, humidity, weather, temp} in hourly"
              :key="weather[0].main"
              class="text-center justify-center"
            >
            <v-row class="justify-center">{{formatTemp(temp)}}</v-row>
            <v-row class="justify-center">{{humidity}}</v-row>
            <v-row class="justify-center">
              <v-avatar class="justify-center">
                <v-img
                  :alt="weather[0].main"
                  :src="'https://openweathermap.org/img/wn/'+`${weather[0].icon}`+'@2x.png'"
                ></v-img>
            </v-avatar>
            </v-row>
            <v-row class="justify-center">{{time}}</v-row>
            </v-col>
          </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { Hourly } from '@/types/hourly';
import {formatTemp} from '@/utils/formatter'

defineProps<{
  hourly: Hourly[]
}>()
</script>