import React, { useEffect } from 'react'
import s from './Nav.module.scss'
import { FaSun } from 'react-icons/fa'
import { RiMoonClearFill, RiSearch2Line } from 'react-icons/ri'
import useLocalStorageState from 'use-local-storage-state'

const Nav = () => {

  const [dark, setDark] = useLocalStorageState('dark', {
    defaultValue: true
  })

  const html = document.querySelector('html')
  useEffect(() => {
    dark ? html.classList.remove('dark') : html.classList.add('dark')
  }, [dark])

  return (
    <nav>
      <div className={s.searchBar}>
        <input type="search" placeholder='Search a city...' />
        <RiSearch2Line size={'25px'}></RiSearch2Line>
      </div>
      <div className={s.switch} onClick={() => setDark(!dark)}>
        <FaSun size={'25px'} className={`${dark && s.onIcon}`}></FaSun>
        <RiMoonClearFill size={'25px'} className={`${!dark && s.onIcon}`}></RiMoonClearFill>
        <div className={`${s.switchState} ${dark && s.onState} ${'invert'}`}></div>
      </div>
    </nav >
  )
}

export default Nav