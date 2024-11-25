import React from 'react'

export const Back = ({name,title}) => {
  return (
    <>
    <div className="back">
        <div className="container">
            <span>
                {name}
            </span>
                <h1>
                {title}
                </h1>
                <img src='immio.jpg' alt="" />
        </div>
    </div>
    </>
  )
}
export default Back