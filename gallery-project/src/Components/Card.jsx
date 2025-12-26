import React from 'react'

const Card = ({elem}) => {
  return (
    <div>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 rounded-xl overflow-hidden ">
              <img
                className="h-full w-full  object-cover"
                src={elem.download_url}
                alt="img"
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
    </div>
  )
}

export default Card
