// This component is used to display the poster image of the movie, and also handles the click event
import { Card, Image } from "antd";
import "./Components.css";

const { Meta } = Card;

const MoviePoster = ({
  header,
  imageUrl,
  footer,
  scale,
  onClick,
  details,
  background,
}) => {
  return (
    <Card
      title={header}
      hoverable={true}
      bordered={!background || background === "white" ? true : false}
      style={{
        cursor: "pointer",
        transform: `scale(${scale})`,
        background: background ? background : "white",
        width: "100%",
        height: "100%",
      }}
      // cover={<ImageCrop imageUrl={imageUrl} style={{ height: "200%" }} />}
      cover={
        <Image
          src={imageUrl}
          preview={false}
          fallback="https://via.placeholder.com/500x750"
        />
      }
      onClick={onClick}
    >
      {footer ? <Meta title={footer} /> : null}
      {details ? <p>{details}</p> : null}
      <br />
    </Card>
  );
};

export default MoviePoster;
