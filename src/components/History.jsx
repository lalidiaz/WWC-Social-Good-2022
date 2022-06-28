import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

export default function History() {
  return (
    <Wrapper>
      <div className='history-wrapper'>
        <h3>Your History</h3>

        <div className='history-tabs'>
          <Link to='/history/emissions'>Emissions</Link>
          <Link to='/history/points'>Points</Link>
        </div>
      </div>
    </Wrapper>
  );
}
