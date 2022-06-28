import Wrapper from "./Wrapper";
import Button from "./Button";

export default function Home() {
  return (
    <Wrapper>
      <div className='home'>
        <div className='home-content'>
          <div className='home-left'>
            <h1 className='home-left-tile'>Track and Reduce your Carbon Footprint</h1>
            <p className='home-left-text'>Have you ever wondered how you can make the world a better place? Here’s a reminder that YOU matter and that it’s the small things that count.</p>
          </div>
          <div className='home-right'>
            <img src='/image.svg' alt='recycle' />
          </div>
        </div>
        <div className='home-btn-container'>
          <Button text='Get Started' to='/sign-in' />
        </div>
      </div>
    </Wrapper>
  );
}
