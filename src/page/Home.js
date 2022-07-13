import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        <Button variant="contained">Hello World</Button>
      </>
    );
}
export default Home