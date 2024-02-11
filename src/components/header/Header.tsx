import { FC } from 'react'
import { motion } from 'framer-motion'

import { spritePath } from '../../helpers/pathIcons'
import cn from './Header.module.scss'
import { Link } from 'react-router-dom'
import HeaderNav from './HeaderNav'
import { anFadeIn } from '../../helpers/animation'

const Header: FC = () => {
  return (
    <header className={cn['header']}>
      <div className={cn['header__container']}>
        <Link to={'/'}>
          <motion.div
            variants={anFadeIn}
            initial='initial'
            whileInView='animate'
            className={cn['header__logo']}>
            <svg className={cn['icon']}>
              <use href={`${spritePath.buttonIcons}#storeFront`}></use>
            </svg>
            <h5 className='text-space-h5'>NFT Marketplace</h5>
          </motion.div>
        </Link>

        <HeaderNav />
      </div>
    </header>
  )
}

export default Header
