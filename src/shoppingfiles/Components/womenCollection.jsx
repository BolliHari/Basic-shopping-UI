import React from 'react'

const womenCollection = (props) => {
  const {title,image1,image2,image3,image4,image5,image6} = props.LadiesFashion;
  return (
    <div className='collectionSection'>
        <div className='bannerBox'>
            <img src="../assets/LadiesBanner.gif" alt="" />
        </div>
        <h3>{title}</h3>
      <div className='menImages'>
          <img src={image1} alt={title} />
          <img src={image2} alt={title} />
          <img src={image3} alt={title} />
          <img src={image4} alt={title} />
          <img src={image5} alt={title} />
          <img src={image6} alt={title} />
      </div>
    </div>
  )
}

export default womenCollection
