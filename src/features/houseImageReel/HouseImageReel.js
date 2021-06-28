import { Carousel } from "react-bootstrap";
import styles from "./HouseImageReel.module.css";

export function HouseImageReel(props) {
  const houseImages = props.houseImages || [];
  const renderImages = houseImages.map((url) => {
    return (
      <Carousel.Item>
        <img className={styles.carouselImages} src={url} alt=""></img>
      </Carousel.Item>
    );
  });

  return (
    <Carousel interval={null} nextLabel={null} prevLabel={null}>
      {renderImages}
    </Carousel>
  );
}
