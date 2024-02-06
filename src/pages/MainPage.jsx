import { Link } from 'react-router-dom';
import gif from '../assets/welcome.gif';
// import gif2 from '../assets/welcome.gif';

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-5">
      <h1>Welcome!</h1>

      <img
        className="img-fluid rounded"
        src={'/images/welcome.gif'}
      />

      <p>
        <Link to={'/ürünler'}>You can access</Link> My favorite books
        books on the Books Page.
      </p>
    </div>
  );
};

export default MainPage;
