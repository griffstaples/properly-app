import { Container, Row, Col } from "react-bootstrap";
import { HouseImageReel } from "../houseImageReel/HouseImageReel";
import { HouseDescription } from "../houseDescription/HouseDescription";

import styles from "./House.module.css";

export function House(props) {
  const house = props.house;
  return (
    <Row className="mt-3">
      <Col xs={4}>
        <HouseImageReel houseImages={house.images}></HouseImageReel>
      </Col>
      <Col xs={8}>
        <HouseDescription house={house}></HouseDescription>
      </Col>
    </Row>
  );
}
