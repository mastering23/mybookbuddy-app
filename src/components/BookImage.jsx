import defaultImg from '../../defaultImage.png';
import { React, useState } from 'react'

export const BookImage = ({ src, alt, width, height }) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleImageError = () => {
    setImageSrc(defaultImg); 
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      onError={handleImageError}
      width={width}
      height={height}
      style={{ objectFit: 'cover' }}
    />
  );
};