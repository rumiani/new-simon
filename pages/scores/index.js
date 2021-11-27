import Head from 'next/head'
import Link from 'next/link'
import { useContext, useEffect } from 'react';
import ErrorFetch from '../../components/errorFetch/errorFetch';
import Loading from '../../components/loading/loading'
import { DataContext } from '../../dataContext/dataContext';
import { fetchData } from '../../fetchData/fetchData';
import Scores from './scores/scores';
const Users = () => {
    const {state,dispatch} = useContext(DataContext);

    useEffect(() => {
        fetchData({dispatch})
    }, [])
    return ( 
        <div className='bg-blue-600 p-4 pb-20 m-auto justify-center md:w-96 w-full h-screen text-center relative'>
            <Head>
        <title>Scores</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
      </Head>
            <h1>All Scores</h1>
            <strong>{state.sortUsers.length} people are playing this game</strong>
                <div className='h-96 bottom-2 w-64 mx-auto my-16 rounded-lg bg-green-100 bg-transparent'>
                    {state.loading && <Loading />}
                    {state.data && <Scores/>}
                    {state.error && <ErrorFetch/>}
                </div>
            <Link href='/' >
                <a className='btn  bg-green-500 px-4'title='Get back to Home page'>Home</a>
            </Link>
        </div>
     );
}
export default Users;