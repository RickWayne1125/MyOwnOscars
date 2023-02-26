import { Image } from "antd";
import "./Components.css";

const ImageCrop = ({ imageUrl, onClick }) => {
  return (
    <>
      {/* Crop the image based on its height so that it has a fixed ratio of 27:40 */}
      {/* <div className="image-container">
        <div className="image-crop-container">
          <div className="image-crop-wrapper">
            <Image
              width="100%"
              src={imageUrl}
              preview={false}
              onClick={onClick}
              className="rounded-image"
            />
          </div>
        </div>
      </div> */}
      <div className="image-container">
        <Image
          //   width={135}
          //   height={200}
          src={imageUrl}
          preview={false}
          onClick={onClick}
          className="rounded-image"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
            aspectRatio: "27/40",
          }}
        />
      </div>
    </>
  );
};

export default ImageCrop;
