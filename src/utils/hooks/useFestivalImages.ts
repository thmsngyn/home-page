import { useEffect, useState } from 'react'

export const useFestivalImages = () => {
  const [loadedImages, setLoadedImages] = useState<any[]>([])
  const [images, setImages] = useState<any[]>([])

  useEffect(() => {
    if (!loadedImages.length) {
      setLoadedImages(
        importAll(
          // @ts-ignore
          require.context('@/assets/images/fests', false, /\.(png|jpe?g|svg)$/),
        ),
      )
    }
  }, [loadedImages])

  useEffect(() => {
    loadedImages.forEach((image: any) => {
      getImgSize(image).then(
        ({ width: thumbnailWidth, height: thumbnailHeight }) => {
          setImages((images) => [
            ...images,
            {
              src: image,
              thumbnail: image,
              thumbnailWidth,
              thumbnailHeight,
            },
          ])
        },
      )
    })
  }, [loadedImages])

  return {
    images,
    loadedImages,
  }
}

function importAll(r: any) {
  return r.keys().map(r)
}

function getImgSize(imgSrc: any): Promise<{ width: number; height: number }> {
  return new Promise((resolve) => {
    var newImg = new Image()

    newImg.onload = function () {
      var height = newImg.height
      var width = newImg.width
      resolve({ width, height })
    }

    newImg.src = imgSrc // this must be done AFTER setting onload
  })
}
