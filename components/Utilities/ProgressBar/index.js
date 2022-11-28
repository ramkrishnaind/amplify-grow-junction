import React from 'react'

const ProgressBar = ({ progressPercentage, headerText, footerText }) => {
  return (
    <div>
      {typeof headerText !== 'undefined' ? (
        headerText
      ) : (
        <div className="px-5">
          <span className="font-bold">{progressPercentage}</span>% of profile
          completed.
        </div>
      )}
      <div className="h-10 rounded-lg w-full bg-gray-300 p-3 m-5">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-3 rounded-lg bg-gray-800`}
        ></div>
      </div>
      {typeof footerText !== 'undefined' ? (
        footerText
      ) : (
        <div className="px-5">
          Complete 100% of the profile to get a better reach
        </div>
      )}
    </div>
  )
}
export default ProgressBar
