import Link from 'next/link'

const Scores = () => {

    return ( 
        <>
            <Link href='./scores'>
            <span className='btn bg-red-700' title='All The Scores'>
                 All Scores</span>
            </Link>
        </>
     );
}
 
export default Scores;