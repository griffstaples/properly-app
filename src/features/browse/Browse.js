import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { HouseList } from "../houseList/HouseList";
import styles from "./Browse.module.css";

export function Browse() {
  var address = "";
  const [houses, setHouses] = useState([]);

  const getNearbyHouses = (address) => {
    fetch("api/houses")
      .then((res) => res.json())
      .then((data) => {
        setHouses(data.houses);
      });
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className={styles.textInputTitle}>
            Search for your dream home here!
          </div>
          <Form inline>
            <Row>
              <FormControl
                type="text"
                placeholder="Enter Address"
                className="mr-sm-2"
              />
            </Row>
            <br />
            <Row>
              <Button
                variant="outline-success"
                onClick={() => getNearbyHouses(address)}
              >
                Search
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row xs={12}>
        <HouseList houses={houses} />
      </Row>
    </Container>
  );
}
