import BaseHeader from "./components/Header/BaseHeader";
import BaseProfile from "./components/Profile/BaseProfile";
import Container from "./components/Container/Container";
const Home = () => {
  return (
    <main className="w-full">
      <Container>
        <BaseHeader />
        <BaseProfile />
      </Container>
    </main>
  );
};

export default Home;
