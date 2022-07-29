import React from 'react'
import { useState, useEffect } from 'react'
import { FastAverageColor } from 'fast-average-color';


const AverageColor = ({image}) => {
    const [color, setColor] = useState();

    //get avarage color of pokemon image
    const fastAverageColor = new FastAverageColor();
    const colorPromise = fastAverageColor.getColorAsync(image);

    //render avarage color of pokemon image as background color of pokemon card
    useEffect(() => {
        const average = async () => await colorPromise.then(color => {
            setColor(color.hex);
        }
        )
        average();
    }, [image?.toString()])
  return { color } ;
}

export default AverageColor