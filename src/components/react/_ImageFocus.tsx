import React, { useRef, useEffect } from 'react';
import '@/styles/ImageFocus.css'; // Import CSS untuk styling

interface ImageFocusProps {
  src: string;
  alt: string;
  focusX: number; // X koordinat fokus (0 - 1)
  focusY: number; // Y koordinat fokus (0 - 1)
}

const ImageFocus: React.FC<ImageFocusProps> = ({ src, alt, focusX, focusY }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (container && image) {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const imageWidth = image.naturalWidth;
      const imageHeight = image.naturalHeight;

      const offsetX = (focusX * imageWidth) - (containerWidth / 2);
      const offsetY = (focusY * imageHeight) - (containerHeight / 2);

      image.style.transform = `translate(-${offsetX}px, -${offsetY}px)`;
    }
  }, [focusX, focusY]);

  return (
    <div ref={containerRef} className="image-container">
      <img ref={imageRef} src={src} alt={alt} className="image" />
    </div>
  );
};

export default ImageFocus;

{/* <div style={{ width: '500px', height: '300px' }}>
    <ImageFocus
      src="path-to-your-image.jpg"
      alt="Description of image"
      focusX={0.5} // Misalnya, fokus pada tengah gambar secara horizontal
      focusY={0.5} // Misalnya, fokus pada tengah gambar secara vertikal
    />
  </div> */}