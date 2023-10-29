import "./scss/app.scss";
import Nav from "./components/Navbar/nav";
const App = () => {
  return (
    <div>
      <section id="Home">
        <Nav />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
