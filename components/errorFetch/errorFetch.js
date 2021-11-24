const ErrorFetch = () => {
    return ( 
        <div className='p-4    text-center'>
            <p className='text-red-700 text-justify font-bold'> Failed To Connect To The Server. <br />
                We are using firebase service which is suspended for your country, 
                Please use a VPN to sign in or see the Scores.
            </p>
            <br />
            <span onClick={() => location.reload()} title='Refresh the page'>
            <i class="fas fa-redo-alt text-4xl text-gray-700 hover:text-gray-900 duration-500 cursor-pointer" title='Refresh'></i>
            </span>
        </div>
     );
}
 
export default ErrorFetch;