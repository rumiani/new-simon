import Head from 'next/head'
import { useContext } from 'react';
import Dashboard from '../components/dashboard/dashboard'
import Menu from '../components/menu/menu'
import Squers from '../components/squers/squers'
import { DataContext } from '../dataContext/dataContext';

export default function Home() {
  const {state,dispatch} = useContext(DataContext);

  
  return (
    <div className="items-center justify-center">
      <Head>
        <title>Simon</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
      </Head>
      <main className="m-auto items-center justify-center md:w-96 w-full h-screen text-center relative border-2">
        {state.dashboard? <Dashboard/> :
        <Squers/>}
        <Menu/>
      </main>
      
    </div>
  )
}
