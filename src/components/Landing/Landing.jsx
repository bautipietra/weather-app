import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import s from './Landing.module.scss'
import { motion } from 'framer-motion'
import { useSearchParams, useLocation } from 'react-router-dom'
import Nav from '../Nav/Nav'
import { RiErrorWarningFill } from 'react-icons/ri'
import { MdLocationOn } from 'react-icons/md'
import { TbTemperatureCelsius } from 'react-icons/tb'
import { WiCloudyGusts } from 'react-icons/wi'
import { TiWeatherCloudy } from 'react-icons/ti'
import { BsCloudRain } from 'react-icons/bs'
import ReactECharts from 'echarts-for-react';

const Landing = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [data, setData] = useState(false)

  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')

  useEffect(() => {
    if (search) {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '998aece269msh14cc2a29cde7443p1003fajsn1c673c092018',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${search}&days=3`, options)
        .then(response => response.json())
        .then(response => {
          setData(response)
          console.log(response);
        })
        .catch(err => console.error(err));
    }

    else {
      const success = position => {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '998aece269msh14cc2a29cde7443p1003fajsn1c673c092018',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
        };
        const { latitude, longitude } = position.coords;
        fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${latitude},${longitude}&days=3`, options)
          .then(response => response.json())
          .then(response => {
            setData(response)
            console.log(response);
          })
          .catch(err => console.error(err));
      }
      window.navigator.geolocation.getCurrentPosition(success)
    }
  }, [])

  var dayOfTheWeek = (num) => {
    const date = data.location.localtime.split(' ')[0]
    const aux = new Date(date)
    let today = aux.getDay()
    if (num) today += num
    today++
    switch (today) {
      case 0:
        return 'Sunday'
        break

      case 1:
        return 'Monday'
        break

      case 2:
        return 'Tuesday'
        break

      case 3:
        return 'Wednesday'
        break

      case 4:
        return 'Thursday'
        break

      case 5:
        return 'Friday'
        break

      case 6:
        return 'Saturday'
        break

      case 7:
        return 'Sunday'
        break

      case 8:
        return 'Monday'
        break

      case 9:
        return 'Tuesday'
        break

    }
  }

  var hourF = () => {
    const hours = data.location.localtime.split(' ')[1].split(':')[0]
    const minutes = data.location.localtime.split(' ')[1].split(':')[0]
    if (Number(hours) < 13) return `${data.location.localtime.split(' ')[1]} AM`
    return `${Number(hours) % 12}:${minutes} PM`
  }

  if (data.forecast) {
    var chartOptions = {
      grid: { top: 8, right: 8, bottom: 24, left: 36 },
      xAxis: {
        type: 'category',
        data: ['06:00', '12:00', '16:00', '20:00']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [data.forecast.forecastday[0].hour[6].temp_c, data.forecast.forecastday[0].hour[12].temp_c, data.forecast.forecastday[0].hour[16].temp_c, data.forecast.forecastday[0].hour[20].temp_c],
          type: 'line',
          smooth: true,
        }
      ],
      tooltip: {
        trigger: 'axis'
      },
    };
  }


  return (
    <>
      <Nav setData={setData}></Nav>
      <div className={s.container}>
        {data ?
          data.error ? <motion.span className={s.error}
            transition={{ duration: 1, delay: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}>
            <RiErrorWarningFill></RiErrorWarningFill>
            {data.error.message}</motion.span> :
            <motion.div className={s.weatherContainer}
              transition={{ duration: 1, delay: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}>
              <div className={`${s.mainCard} before`}>
                <div className={s.city}>
                  <div className={s.location}>
                    <span><MdLocationOn size={'25px'} className={'default'}></MdLocationOn> {data.location.name}</span>
                    <span>, {dayOfTheWeek()} {hourF()}</span>
                  </div>
                  <div className={s.weather}>
                    <span className={s.temperature}>{data.current.temp_c}<TbTemperatureCelsius></TbTemperatureCelsius></span>
                  </div>
                  <div className={s.stats}>
                    <span title='Condition'><TiWeatherCloudy size={'20px'}></TiWeatherCloudy>{data.current.condition.text}</span>
                    <span title='Wind Speed'><WiCloudyGusts size={'25px'}></WiCloudyGusts>{data.current.wind_kph}km/h</span>
                    <span title='Chance of rain'><BsCloudRain size={'20px'}></BsCloudRain>{data.forecast.forecastday[0].day.daily_chance_of_rain}%</span>
                  </div>
                </div>
                <div className={s.chart}>
                  <ReactECharts option={chartOptions} />
                </div>
                <h2>Forecast</h2>
                <div className={`${s.forecast}`}>
                  <div className={s.day}>
                    <span className={s.secondary}>{dayOfTheWeek(1)}</span>
                    <span className={s.primary}>{data.forecast.forecastday[1].day.avgtemp_c}<TbTemperatureCelsius></TbTemperatureCelsius></span>
                    <span title='Condition' className={s.secondary}><TiWeatherCloudy size={'20px'}></TiWeatherCloudy>{data.forecast.forecastday[1].day.condition.text}</span>
                    <span title='Wind Speed' className={s.secondary}><WiCloudyGusts size={'25px'}></WiCloudyGusts>{data.forecast.forecastday[1].day.maxwind_kph}km/h</span>
                    <span title='Chance of rain' className={s.secondary}><BsCloudRain size={'20px'}></BsCloudRain>{data.forecast.forecastday[1].day.daily_chance_of_rain}%</span>
                  </div>
                  <div className={s.day}>
                    <span className={s.secondary}>{dayOfTheWeek(2)}</span>
                    <span className={s.primary}>{data.forecast.forecastday[2].day.avgtemp_c}<TbTemperatureCelsius></TbTemperatureCelsius></span>
                    <span title='Condition' className={s.secondary}>{data.forecast.forecastday[2].day.condition.text}<TiWeatherCloudy size={'20px'}></TiWeatherCloudy></span>
                    <span title='Wind Speed' className={s.secondary}>{data.forecast.forecastday[2].day.maxwind_kph}km/h<WiCloudyGusts size={'25px'}></WiCloudyGusts></span>
                    <span title='Chance of rain' className={s.secondary}>{data.forecast.forecastday[2].day.daily_chance_of_rain}%<BsCloudRain size={'20px'}></BsCloudRain></span>
                  </div>
                </div>
              </div>
            </motion.div>
          : <Loader></Loader>}
      </div></>
  )
}

export default Landing