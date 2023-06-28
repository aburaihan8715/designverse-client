import { Helmet } from "react-helmet-async";
import Container from "../../../components/Container/Container";

const MyEnrolledClassesPage = () => {
  return (
    <div>
      <Helmet>
        <title>FashionVerse | MyEnrolledClassesPage</title>
      </Helmet>
      <Container>
        <div>my enrolled classes</div>
      </Container>
    </div>
  );
};

export default MyEnrolledClassesPage;
