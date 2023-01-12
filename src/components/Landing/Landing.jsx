import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import s from './Landing.module.scss'
import { motion } from 'framer-motion'
import weatherImage from '../../utils/weatherImage.js'

const Landing = () => {
  const [data, setData] = useState(false)
  useEffect(() => {
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
  }, [])

  if (data) {

    let aux = new Date()
    var today = aux.getDay()
    var dayOfTheWeek = (num) => {
      if (num) today += num
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

        case 3:
          return 'Monday'
          break

      }
    }

    var hourF = () => {
      const hours = data.location.localtime.split(' ')[1].split(':')[0]
      const minutes = data.location.localtime.split(' ')[1].split(':')[0]
      if (Number(hours) < 13) return `${data.location.localtime} AM`
      return `${Number(hours) % 12}:${minutes} PM`
    }
    var hour = hourF()

  }


  return (
    <div >
      {data ?
        <motion.div className={s.container}
          transition={{ duration: 1, delay: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <div className={s.city}>
            <div className={s.mainCard}>
              <div>
                <span>{dayOfTheWeek()}</span>
                <span>{hour}</span>
                <span>{weatherImage(data.current.condition.code)}</span>
              </div>
            </div>
          </div>
        </motion.div>
        : <Loader></Loader>}
    </div>
  )
}

export default Landing