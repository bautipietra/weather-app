import React, { useEffect } from 'react'
import s from './Nav.module.scss'
import { FaSun } from 'react-icons/fa'
import { RiMoonClearFill, RiSearch2Line } from 'react-icons/ri'
import useLocalStorageState from 'use-local-storage-state'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Nav = ({ setData }) => {

  const [dark, setDark] = useLocalStorageState('dark', {
    defaultValue: true
  })

  const html = document.querySelector('html')
  useEffect(() => {
    dark ? html.classList.remove('dark') : html.classList.add('dark')
  }, [dark])

  const navigate = useNavigate();
  const searchHandler = (e) => {
    if (
      (e._reactName == 'onClick' && e.target.value.length) ||
      (e._reactName = 'onKeyDown' && e.target.value.length && e.key === 'Enter')
    ) {
      navigate(`?search=${e.target.value}`)
      setData(false)
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '998aece269msh14cc2a29cde7443p1003fajsn1c673c092018',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${e.target.value}&days=3`, options)
        .then(response => response.json())
        .then(response => {
          setData(response)
          console.log(response);
        })
        .catch(err => console.error(err));
      e.target.value = ''
    }
  }

  return (
    <motion.nav
      transition={{ duration: 1, delay: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}>
      <div className={s.searchBar}>
        <input type="search" placeholder='Search a city...' onKeyDown={(e) => searchHandler(e)} />
        <RiSearch2Line size={'25px'} onClick={(e) => searchHandler(e)}></RiSearch2Line>
      </div>
      <div className={s.switch} onClick={() => setDark(!dark)}>
        <FaSun size={'25px'} className={`${dark && s.onIcon}`}></FaSun>
        <RiMoonClearFill size={'25px'} className={`${!dark && s.onIcon}`}></RiMoonClearFill>
        <div className={`${s.switchState} ${dark && s.onState} ${'invert'}`}></div>
      </div>
    </motion.nav >
  )
}

export default Nav