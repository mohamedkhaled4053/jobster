import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import Register from '../components/Register';

export default function Landing() {
  return (
    <Wrapper>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            laborum sequi molestiae, asperiores autem quo ut ad quaerat
            voluptates alias suscipit fugit quasi commodi ea dolorum in, at ex
            earum.
          </p>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
        <Register />
      </div>
    </Wrapper>
  );
}
