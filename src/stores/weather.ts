import { defineStore } from 'pinia'
import { Daily } from '@/types/daily'
import { Hourly } from '@/types/hourly'
import DailyData from '@/mockData/Daily.json'
import HourlyData from '@/mockData/Hourly.json'
import MockCityWeather from '@/mockData/MockCityWeather.json'
import axios from 'axios'


export const useWeatherStore = defineStore('weather', ()=>{
  //Initial value
  const init = {
    initDaily: {
      temp: {
        day: 0,
        min: 0,
        max: 0,
        night: 0,
        eve: 0,
        morn: 0,
      },
      weather:[
        {
           id: 0,
           main: '',
           description: '',
           icon: ''
        }
     ],
      summary: '',
      date: ''
    },
    initHourly: {
      temp: 0,
      humidity: 0,
      weather:[
         {
            id:0,
            main: '',
            description: '',
            icon: ''
         }
      ],
      time: ''
   }
  }

  const daily = ref<Daily[]>([init.initDaily])

  const hourly = ref<Hourly[]>([init.initHourly])


  //To update the reference
  const updateWeather = (payload: any) => {
    const {daily, hourly} = payload
    
    daily.value = daily
    hourly.value = hourly
  }

  
 /**
  * Get formatted mock data
 */
 const getMockData = () => {
  daily.value = DailyData.daily;
  hourly.value = HourlyData.hourly
  return true
 }


 const getDataByCity = (city: string) => {
  daily.value = MockCityWeather[city as keyof typeof MockCityWeather].daily
  hourly.value = MockCityWeather[city as keyof typeof MockCityWeather].hourly
 }
 /**
  * This is util function to format the API response, to get/filter the proper data for the component
 */
 const formatData = (res: any) =>{
  //This is unfinished due to the invalid api key 
  return res
 }

 /**
   * Get - fetch weather data from API
   * @param {object} params
   * required @param {object} params.lat
   * required @param {object} params.lon
   * optional @param {object} params.exclude 
   * required @param {object} params.appid
  */
 const getData = async () => {
  try{
    const res = await axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=40.730610&lon= -73.935242&exclude=minutely,alerts&appid=482944e26d320a80bd5e4f23b3de7d1f')
    const updatedData = formatData(res)

  updateWeather(updatedData)
  }
  catch(e){
    //Will use the mock data if the api is failed.
    console.log(e)
    return getMockData()
  }
 }
 return {
  daily: computed(() => daily.value),
  hourly: computed(() => hourly.value),
  getData,
  getDataByCity
 }
})
