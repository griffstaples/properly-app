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
        <ui>
          <li>Square Feet: {house.squarefootage} sqft</li>
          <li>Bedrooms: {house.rooms.numberOfBedrooms}</li>
          <li>Bathrooms: {house.rooms.numberOfBathrooms}</li>
          <li>Backyard: {house.hasBackyard ? "Yes" : "No"}</li>
          <li>Parking: {house.hasParking ? "Yes" : "No"}</li>
        </ui>
      </Row>
    </Container>
  );
}
