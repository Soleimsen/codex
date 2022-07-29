import React, { useEffect } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FastAverageColor } from 'fast-average-color'
const PokemonCardDetailed = ({name, type, image }) => {

    const [averageColor, setAverageColor] = useState();

    //stupid hack to get around the fact that the image is not loaded when the component is rendered
    //this is a workaround, but it works
    if (image) {
    useEffect(() => {
        const average = async () => {
            const fastAverageColor = new FastAverageColor();
            const colorPromise = fastAverageColor.getColorAsync(image);
            await colorPromise.then(color => {
                setAverageColor(color.hex);
            }
            )
        }
        average();
    }
    , [image?.toString()])
    }


  return (
    <>
       <div className='flex justify-center '>
            <div className='border w-3/12 flex justify-center'>
                <div>
                    <h1>{name}</h1>
                    <h2>{type}</h2>
                    <div className={`flex justify-center align-bottom rounded-t-lg`} style={{backgroundColor: averageColor}}>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default PokemonCardDetailed