import { Container, ListGroup } from "react-bootstrap";
import { House } from "../house/House";

export function HouseList(props) {
  const houses = props.houses || [];
  const renderedHouses = houses.map((house, idx) => (
    <House key={idx} house={house}></House>
  ));

  return (
    <Container>
      <ListGroup>{renderedHouses}</ListGroup>
    </Container>
  );
}
