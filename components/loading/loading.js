import classes from '../../styles/loading.module.css'
const Loading = () => {
    return ( 
        <div className={classes.spinner}>
            <p >Please wait ...</p>
            <div className={classes.ldsSpinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div> 
        </div>
    );
}
 
export default Loading;