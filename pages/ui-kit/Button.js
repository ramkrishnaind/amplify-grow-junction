import React from 'react'
import Loader from './Loader'
const Button = (props) => {
  const {
    label,
    handleSubmit = () => {},
    styleOverride,
    disable,
    image,
    type,
    containerOverride,
    loader = false,
    link = false,
    ...rest
  } = props

  return (
    <div
      className="flex w-full"
      style={containerOverride ? containerOverride : {}}
    >
      <button
        // type="submit"
        className="group relative flex w-full justify-center  items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        style={styleOverride}
        type={type || 'button'}
        {...rest}
      >
        {link ? (
          <>
            {image && (
              <img src={image} alt={label} className="w-10 h-10 object-cover" />
            )}
            <a
              href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </>
        ) : (
          <>
            {loader ? (
              <Loader />
            ) : (
              <div className="flex w-full justify-around items-center p-5">
                {image && (
                  <img
                    src={image}
                    alt={label}
                    className="w-10 h-10 object-cover"
                  />
                )}
                <span>{label}</span>{' '}
              </div>
            )}
          </>
        )}
      </button>
    </div>
  )
}
export default Button
