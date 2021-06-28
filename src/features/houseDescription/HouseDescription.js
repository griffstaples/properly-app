import { Container, Row } from "react-bootstrap";
import styles from "./HouseDescription.module.css";

export function HouseDescription(props) {
  const house = props.house || {};

  return (
    <Container>
      <Row>
        <h3>{house.address}</h3>
      </Row>
      <Row>
        <div className={styles.badgeContainer}>
          <div className={styles.badge}>
            Square Feet: {house.squarefootage} sqft
          </div>
          <div className={styles.badge}>
            Bedrooms: {house.rooms.numberOfBedrooms}
          </div>
          <div className={styles.badge}>
            Bathrooms: {house.rooms.numberOfBathrooms}
          </div>
          <div className={styles.badge}>
            Backyard: {house.hasBackyard ? "Yes" : "No"}
          </div>
          <div className={styles.badge}>
            Parking: {house.hasParking ? "Yes" : "No"}
          </div>
        </div>
      </Row>
    </Container>
  );
}
