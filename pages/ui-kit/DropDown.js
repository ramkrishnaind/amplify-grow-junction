import Image from 'next/image'
import React from 'react'
import { color } from '../../public/theme/Color'

const DropDown = (props) => {
  const {
    label,
    placeholder,
    type,
    id,
    name,
    onChangeValue,
    disabled = false,
    icon,
    styleOverride,
    containerStyle,
    value,
    errMsg,
    infoMsg = '',
    dropDownBool = false,
    openDropDown = () => {},
    mulitline,

    ...rest
  } = props

  return (
    <div
      className="flex flex-col  "
      //   style={containerStyle}
      onClick={() => {
        openDropDown(value)
      }}
    >
      <label
        // dir="rtl"
        style={{
          //   color: Color.textColor,
          display: 'flex',
          flex: 1,
          marginBottom: 3,
        }}
      >
        {label}
      </label>
      <div
        className="focus-outline   p-4  w-full flex flex-1 flex-row rounded-md  px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        style={{ ...containerStyle }}
      >
        <div
          style={{ flex: 1, display: 'flex', color: color.black, fontSize: 14 }}
        >
          {value}
        </div>
        <Image
          src={require('../../public/assets/icon/dropDown.png')}
          alt=""
          style={
            dropDownBool
              ? {
                  height: 5,
                  width: 10,
                  transform: 'rotate(180deg)',
                  alignSelf: 'center',
                  cursor: 'pointer',
                }
              : { height: 5, width: 10, alignSelf: 'center', cursor: 'pointer' }
          }
        />
        {/* {mulitline && value?.length ? (
          <>
            {value?.map((item, index) => {
              return (
                <div
                  key={index.toString()}
                  style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    // flexDirection: "row",
                    // marginRight: 1,
                  }}
                >
                  {item?.value}
                </div>
              )
            })}
          </>
        ) : ( */}

        {/* )} */}
      </div>
      {errMsg ? (
        <div
          style={{
            fontSize: 12,
            color: 'red',
          }}
        >
          {errMsg}
        </div>
      ) : (
        <div
          style={{
            fontSize: 12,
            marginTop: 3,
            // color: color.lightGrey1,
          }}
        >
          {infoMsg}
        </div>
      )}
    </div>
  )
}

export default DropDown
