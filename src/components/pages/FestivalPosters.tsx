import './FestivalPosters.scss'

import React from 'react'
//@ts-ignore
import Gallery from 'react-grid-gallery'

import { useFestivalImages } from '@/utils/hooks'

export const FestivalPosters = () => {
  const { images } = useFestivalImages()

  return (
    <div>
      <Gallery
        images={images}
        enableImageSelection={false}
        margin={10}
        showLightboxThumbnails={true}
        backdropClosesModal={true}
      ></Gallery>
    </div>
  )
}
