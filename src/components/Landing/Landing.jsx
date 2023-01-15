import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import s from './Landing.module.scss'
import { motion } from 'framer-motion'
import weatherImage from '../../utils/weatherImage.jsx'
import { useSearchParams, useLocation } from 'react-router-dom'
import Nav from '../Nav/Nav'

const Landing = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [data, setData] = useState(false)

  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')
  if (search != searchParams.get('search')) setData(false)

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

    }
  }

  var hourF = () => {
    const hours = data.location.localtime.split(' ')[1].split(':')[0]
    const minutes = data.location.localtime.split(' ')[1].split(':')[0]
    if (Number(hours) < 13) return `${data.location.localtime.split(' ')[1]} AM`
    return `${Number(hours) % 12}:${minutes} PM`
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
            {data.error.message}</motion.span> :
            <motion.div className={s.weatherContainer}
              transition={{ duration: 1, delay: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}>
              <div className={s.city}>
                <div className={s.mainCard}>
                  <div>
                    <span>{dayOfTheWeek()}</span>
                    <span>{hourF()}</span>
                    {weatherImage(data.current.condition.code, data.current.is_day)}
                  </div>
                </div>
              </div>
            </motion.div>
          : <Loader></Loader>}
      </div></>
  )
}

export default Landing