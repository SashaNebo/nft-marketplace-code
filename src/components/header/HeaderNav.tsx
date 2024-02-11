import { FC } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import Button from '../UI/buttons/Button'
import cn from './Header.module.scss'
import { anFadeInEls } from '../../helpers/animation'

const HeaderNav: FC = () => {
  const navLinks = [
    {
      text: 'Marketplace',
      link: '/marketplace',
    },
    {
      text: 'Rankings',
      link: '/rankings',
    },
    {
      text: 'Connect a wallet',
      link: '/connect',
    },
  ]

  return (
    <nav className={cn['nav']}>
      <ul className={cn['nav-list']}>
        {navLinks.map((navLink, i) => (
          <motion.li
            variants={anFadeInEls}
            initial='initial'
            animate='animate'
            custom={i + 1}
            key={navLink.link}
            className={cn['nav-item']}>
            <Link to={navLink.link}>
              <span className={cn['nav-link']}>{navLink.text}</span>
            </Link>
          </motion.li>
        ))}
      </ul>

      <Button text='sign up' type='primary' size='lg' icon='user' className={cn['sign-up']} />
    </nav>
  )
}

export default HeaderNav
