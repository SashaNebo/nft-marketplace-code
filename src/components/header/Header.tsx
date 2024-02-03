import { FC } from 'react'
import { spritePath } from '../../helpers/pathIcons'
import Button from '../UI/buttons/Button'
import cn from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <header className={cn['header']}>
      <div className={cn['header__container']}>
        <Link to={'/'}>
          <div className={cn['header__logo']}>
            <svg className={cn['icon']}>
              <use href={`${spritePath.buttonIcons}#storeFront`}></use>
            </svg>
            <h5 className='text-space-h5'>NFT Marketplace</h5>
          </div>
        </Link>

        <nav className={cn['nav']}>
          <ul className={cn['nav-list']}>
            <li className={cn['nav-item']}>
              <Link to=''>
                <span className={cn['nav-link']}>Marketplace</span>
              </Link>
            </li>
            <li className={cn['nav-item']}>
              <Link to='/rankings'>
                <span className={cn['nav-link']}>Rankings</span>
              </Link>
            </li>
            <li className={cn['nav-item']}>
              <Link to=''>
                <span className={cn['nav-link']}>Connect a wallet</span>
              </Link>
            </li>
          </ul>

          <Button text='sign up' type='primary' size='lg' icon='user' className={cn['sign-up']} />
        </nav>
      </div>
    </header>
  )
}

export default Header
