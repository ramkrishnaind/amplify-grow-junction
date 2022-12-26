import Image from 'next/image'
import React from 'react'
import { color } from '../../../public/theme/Color'
import Button from '../../ui-kit/Button'

const Header = (props) => {
  const { btnName, onClickBtn, style } = props
  return (
    <div
      className="flex flex-col md:flex-row mb-10 md:mb-0 md:justify-between justify-center w-full md:max-w-sm"
      style={{
        // justifyContent: 'space-between',
        backgroundColor: color.headerColor,
        // maxWidth: 300,
        alignItems: 'center',
        paddingLeft: 48,
        paddingRight: 48,
      }}
    >
      <Image
        src={require('../../../public/assets/icon/logo.png')}
        alt={''}
        style={{
          height: 89,
          // , width: 224
        }}
      />
      <Button
        label={btnName}
        containerOverride={{ minWidth: 200 }}
        onClick={() => {
          onClickBtn()
        }}
        styleOverride={style}
      />
    </div>
  )
}

export default Header
