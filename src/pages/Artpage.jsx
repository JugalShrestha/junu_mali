import { useState } from "react";

const Artpage = () => {
  // State to hold the currently displayed image
  const [selectedImage, setSelectedImage] = useState("/1.webp");

  // State to hold the currently hovered image
  const [hoveredImage, setHoveredImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Function to generate random sizes
  const getRandomSize = () => {
    const width = Math.random() * 200 + 100; // Random width between 100px and 300px
    const height = Math.random() * 50 + 25; // Random height between 50px and 75px
    return { width: `${width}px`, height: `${height}px` };
  };

  // Function to handle hover
  const handleHover = (imageSrc) => {
    setHoveredImage(imageSrc); // Set the hovered image
  };

  return (
    <div className="page">
      <div id="art-page">
        <div className="display">
          <div className="art">
            <img src={selectedImage} alt="Selected Art" />
          </div>
        </div>
        <div className="carousel">
          {[
            "/1.webp",
            "/2.webp",
            "/3.webp",
            "/4.webp",
            "/5.webp",
            "/6.webp",
            "/7.webp",
            "/8.webp",
            "/9.webp",
            "/10.webp",
            "/11.webp",
            "/12.webp",
            "/13.webp",
          ].map((src, index) => (
            <img
              src={src}
              className="art"
              alt={`Art ${index + 1}`}
              style={{
                ...getRandomSize(),
                filter: selectedImage === src || hoveredImage === src ? "none" : "grayscale(100%)", // Grayscale others
                transform: selectedImage === src || hoveredImage === src ? "scale(1.2) translateY(-1vh)" : "none", // Scale and translate
                transition: "all .3s ease-out", // Smooth transition for transform
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(src)}
              onMouseEnter={() => handleHover(src)}
              onMouseLeave={() => setHoveredImage(null)}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artpage;
