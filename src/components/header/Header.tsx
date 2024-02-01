import { FC } from 'react'
import { spritePath } from '../../helpers/pathIcons'
import Button from '../UI/buttons/Button'
import cn from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={cn['header']}>
      <div className={cn['header__container']}>
        <div className={cn['header__logo']}>
          <svg className={cn['icon']}>
            <use href={`${spritePath.buttonIcons}#storeFront`}></use>
          </svg>
          <h5 className='text-space-h5'>NFT Marketplace</h5>
        </div>

        <nav className={cn['nav']}>
          <ul className={cn['nav-list']}>
            <li className={cn['nav-item']}>
              <a className={cn['nav-link']} href=''>
                Marketplace
              </a>
            </li>
            <li className={cn['nav-item']}>
              <a className={cn['nav-link']} href=''>
                Rankings
              </a>
            </li>
            <li className={cn['nav-item']}>
              <a className={cn['nav-link']} href=''>
                Connect a wallet
              </a>
            </li>
          </ul>

          <Button text='sign up' type='primary' size='lg' icon='user' className={cn['sign-up']} />
        </nav>
      </div>
    </header>
  )
}

export default Header
