import React, { useState, useEffect } from "react";
// import { Carousel } from "react-bootstrap";
import axios from "axios";

// const baseImagesUrl = "http://localhost:4001/images";

const baseImagesUrl = "http://localhost:4001/files";
// const baseImagesUrl = "http://localhost:4001/resources/static/assets/uploads/";

const ImageCarousel = () => {
  const [images, setImages] = useState(null);

  const getImage = async () => {
    try {
      let { data } = await axios.get("http://localhost:4001/files/files");

        // console.log("dataGetImage:", data);

      // setImages(data.photos);
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  // console.log("images:", images);
  return (
    <>
      <div>
        <ul>
          {images
            ? images.map((image) => (
                <li key={image.name}>
                  <img
                    // src={`${baseImagesUrl}/${image.imageFilename}`}
                    src={`${baseImagesUrl}/${image.name}`}
                    // src={`${baseImagesUrl}/${image.name}`}
                    // src={image.url}
                    alt={image.name}
                  />
                  {/* <p>{image.nameImage}</p> */}
                  <p>{image.url}</p>
                  <p>{image.name}</p>
                </li>
              ))
            : null}
          {/* <li></li> */}
        </ul>
      </div>

      {/* <Carousel>
        {images
          ? images.map((image) => {
              //   console.log("image.imagePath:", image.imagePath);
              //   console.log("image.imageUrl:", image.imageUrl);
              //   console.log("image.description:", image.description);

              return (
                <Carousel.Item key={image._id}>
                  <div>
                    <img
                      className=" w-100 img-fluid"
                      src={`${baseImagesUrl}/${image.imageFilename}`}
                      // src={image.imageUrl}
                      alt={image.imageFilename}
                    />
                    <p>{image.nameImage}</p>
                    <p>{image.descriptionImage}</p>
                  </div>
                  <Carousel.Caption>
                    <h3>{image.description}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })
          : null}
      </Carousel> */}
    </>
  );
};

export default ImageCarousel;
