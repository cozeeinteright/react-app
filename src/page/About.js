import { Link } from "react-router-dom";

function About() {
    return (
      <>
        <main>
          <h2>About</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
}
export default About