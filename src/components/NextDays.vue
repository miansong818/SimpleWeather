<template>
  <v-container fluid color="grey-lighten-3" max-width="448">
          <v-row v-for="({temp, weather, summary, date}, index) in prop.daily"
          :key="index" class="d-flex text-center">
              <v-col>
                <v-avatar class="justify-center">
                  <v-img
                    :alt="weather[0].main"
                    :src="'https://openweathermap.org/img/wn/'+`${weather[0].icon}`+'@2x.png'"
                  ></v-img>
                </v-avatar>
                </v-col>

                <v-col>
                  <v-row class="justify-center text-subtitle-1 text-md-subtitle-2">{{date}}</v-row>
                  <v-row class="text-caption">{{summary}}</v-row>
                </v-col>

                <v-col>{{ formatTemp(temp.max)}} - {{ formatTemp(temp.min) }}</v-col>
          </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { Daily } from '@/types/daily';
import {formatTemp} from '@/utils/formatter'

const prop = defineProps<{
  daily: Daily[]
}>()
</script>