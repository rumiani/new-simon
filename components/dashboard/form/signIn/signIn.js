// import * as t from '../../../../dataContext/types'
// import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
// import * as Yup from 'yup'
// import { useContext } from 'react';
// import { DataContext } from '../../../../dataContext/dataContext';
// const initialValues ={
//             username : '',
//             password : ''
//         }

// const onSubmit = (values) => {
//     console.log(values);
// }
// const validationSchema = Yup.object ({
//     username: Yup.string().required('The username is required'),
//     password: Yup.string().required('The password is required')

// })
// const validate = (values) =>{
//     let errors = {}
//     if(!values.username) errors.username = 'Required'
//     if(!values.password) errors.password = 'Required'
//     // if(!/^[A-Z0-9._%+-][A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Required'
//     console.log(errors);
//     return errors
// }

// const SignIn = () => {
//     const {state,dispatch} = useContext(DataContext);

//     const formik  = useFormik({
//         initialValues,
//         onSubmit,
//         // validate
//         validationSchema

//     })

//     console.log(formik.touched);

//     return ( 
//         <Formik className='pt-12'>
//             <h2><strong>SIGN IN</strong></h2>
//             <Form onSubmit={formik.handleSubmit} className=' w-min m-auto'>
//                 <label className='flex' htmlFor="username">Username</label>
//                 <Field className='input' type="text" id='username' name='username' placeholder='Username'
//                                 {...formik.getFieldProps('username')}/>
//                 <ErrorMessage className='formControl' name='username'/>
                
//                 <label className='flex' htmlFor="password">Password</label>
//                 <Field className='input' type="password" id='password' name='password' placeholder='Password'
//                 {...formik.getFieldProps('password')}/>
//                 <ErrorMessage className='formControl' name='password'/>
                
//                 <button className='submit' type='submit'>Sign in</button>
//                 <div className='underline text-blue-800 font-bold cursor-pointer hover:scale-105 duration-500'
//                 onClick={() => dispatch({type:t.SIGN})} >
//                     Create an account</div>
//             </Form>
//         </Formik>
//      );
// }
 
// export default SignIn;