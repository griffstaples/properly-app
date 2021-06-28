import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHousesReducer, selectHouses } from "./browseSlice";
import { HouseList } from "../houseList/HouseList";
import styles from "./Browse.module.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export function Browse() {
  const dispatch = useDispatch();

  //get store and initialize state
  const houses = useSelector(selectHouses);
  const [address, setAddress] = useState("");

  const getNearbyHouses = (myAddr) => {
    fetch(`api/houses/${myAddr}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.houses)) {
          dispatch(setHousesReducer(data.houses));
        } else {
          dispatch(setHousesReducer([data.houses]));
        }
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
                onChange={(e) => setAddress(e.target.value)}
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
