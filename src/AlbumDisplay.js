import React from 'react'
import "./AlbumDisplay.css"

function AlbumDisplay( { top3List } ) {

  return (
    <div className="album__display">
        {top3List?.map((item) => (
          <a target="_blank" rel="noopener noreferrer" href={item.external_urls.spotify}><img width="180" height="180" src={item.images[0].url}/></a>
    ))}
    </div>
  )
}

export default AlbumDisplay