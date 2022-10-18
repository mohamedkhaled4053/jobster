import notFound from '../assets/images/not-found.svg';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';

export default function Error() {
  return (
    <Wrapper>
      <div>
        <img src={notFound} alt="not found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
}
