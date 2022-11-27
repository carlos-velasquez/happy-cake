import { Container } from "react-bootstrap";

function Home () {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Biendenido a <span className="fw-bold"> Happy Cake </span>  
      </h1>
      <p className="fs-1">🎂</p>
      <h6> El lugar de los pasteles felices </h6>
    </Container>
  );
};

export default Home;
