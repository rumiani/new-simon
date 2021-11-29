import { useContext } from 'react';
import * as t from '../../dataContext/types'
import { DataContext } from '../../dataContext/dataContext';
import { tryAgainFunc } from './tryAgainFunc';

const GameOver = () => {
    const {state,dispatch} = useContext(DataContext);

    return ( 
        <div className='w-full bg-red-800 h-full absolute p-8'>
            <strong>Game over </strong>
            <br /> <strong>Your Score: {state.score}</strong>
            <br />
            {state.signedIn?'Your score has been recorded':
            "Sorry your score hasn't been recorded. To record your score you need to use a VPN"}
            <br />
            <button className='btn bg-green-600 mt-32'
            onClick={() => tryAgainFunc({state,dispatch})}>
                Try again</button>
          </div>
     );
}
 
export default GameOver;