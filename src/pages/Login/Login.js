import React, { Component } from 'react';
import './Login.css'
import { Form, Button } from 'react-bootstrap';
import {Formik} from 'formik'
import * as Yup from 'yup';


class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            male: true,
            female: false
        }
    }

    handleGender = () => {
        console.log('gender')
        this.setState({male:!this.state.male, female:!this.state.female})
    }

    render(){
        return(
            <div className='container-register'>
                <div className='form-label'>
                    Login
                </div>  
                <div>
                    <Formik
                        initialValues={{ email: '', firstname: '', lastname: '', mobilenumber: '', password: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 500);
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                            .email()
                            .required('Required'),
                            firstname: Yup.string()
                            .required('Required'),
                            lastname: Yup.string()
                            .required('Required'),
                            mobilenumber: Yup.string()
                            .required('Required'),
                            password: Yup.string()
                            .required('Required')
                        })}
                    >
                        {props => {
                            const {
                                values,
                                touched,
                                errors,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                            } = props;
                            return (
                                <Form onSubmit={handleSubmit}>

                                    

                                    <Form.Group>
                                        <Form.Control 
                                            className='text-field' 
                                            placeholder='Email'
                                            id='email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.email && touched.email && (
                                            <div className="input-feedback">{errors.email}</div>
                                        )}
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control 
                                            className='text-field' 
                                            placeholder='Password'
                                            id='password'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.password && touched.password && (
                                            <div className="input-feedback">{errors.password}</div>
                                        )}
                                    </Form.Group>

                                    <Button className='btn-long' variant="primary" type='submit' disabled={isSubmitting}>Register</Button>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>              
            </div>
        )
    }
    
}

export default Login;