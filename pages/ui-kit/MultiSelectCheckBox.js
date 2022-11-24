import Image from 'next/image'
import React, { useState } from 'react'
import { TEXT_DIRECTION } from '../constant/DirectionType'
import { Color } from '../theme/Color'
import Button from './Button'

const MultiSelectCheckBox = (props) => {
  const {
    options,
    handleClick = () => {},
    selectedId,
    style,
    handleSubmit = () => {},
    handleCancel = () => {},
  } = props

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginRight: 16,
        marginTop: 16,
        ...style,
      }}
      dir={TEXT_DIRECTION}
    >
      {options?.map((item, index) => {
        let checkedBool = false
        selectedId?.map((items, index) => {
          if (items === item?.id) {
            checkedBool = true
          }
        })

        return (
          <div
            key={index.toString()}
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 15,
              justifyContent: 'flex-start',
            }}
            dir={TEXT_DIRECTION}
          >
            <div
              onClick={() => {
                handleClick(item)
              }}
            >
              {!checkedBool ? (
                <div
                  style={{
                    height: 18,
                    width: 18,
                    borderWidth: 1,
                    borderColor: Color.lightGrey1,
                  }}
                />
              ) : (
                <Image
                  src={require('../../public/assets/icon/Icon.png')}
                  alt=""
                  style={{ height: 18, width: 18 }}
                />
              )}
            </div>
            <div style={{ color: Color.textColor1, marginRight: 15 }}>
              {item.value}
            </div>
          </div>
        )
      })}
      {/* <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
        <Button
          label="save"
          styleOverride={{
            backgroundColor: Color.blue,
            color: Color.white,
            width: 100,
            height: 32,
            marginRight: 20,
          }}
          onClick={handleSubmit}
        />
        <Button
          label="cancel"
          styleOverride={{
            backgroundColor: Color.white,
            color: Color.blue,
            width: 100,
            height: 32,
          }}
          onClick={handleCancel}
        />
      </div> */}
    </div>
    // </div>
  )
}

export default MultiSelectCheckBox
