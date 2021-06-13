import React from "react";
import "bootstrap/dist/css/bootstrap.css";

// import FormChangeImage from "../../Form/FormChangeImage/FormChangeImage";
import ImageCarousel from "./ImageCarousel";
import Upload from "./Upload";

// import imagePic from '../'

import styles from "./WomenClub.module.css";

const WomenClub = () => {
  return (
    <div className={styles.womenClub}>
      <h2>Hello from WomenClub</h2>
      {/* <FormChangeImage /> */}

      {/* <form class="mt-4"
            action="/upload"
            method="POST"
            enctype="multipart/form-data"
          >
            <div class="form-group">
              <input
                type="file"
                name="file"
                id="input-files"
                class="form-control-file border"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form> */}
      <div className="container">
        <ImageCarousel />
        <Upload />
      </div>
    </div>
  );
};

export default WomenClub;
