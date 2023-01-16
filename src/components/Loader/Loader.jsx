import React from 'react'
import s from './Loader.module.scss'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.span className={`${s.loader} invert`}
      transition={{ duration: 1, delay: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}></motion.span>
  )
}

export default Loader