import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import LoginFormikInput from '../Components/FormikInputs/LoginFormikInput';
import * as yup from 'yup';
import styled from 'styled-components';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useAppDispatch } from '../hooks';
import { userLoggedIn } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../constans/routes';

const StyledLogin = styled.div `
    .login {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #8498eb;
    }
    .login__row {
        padding: 5px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
    }
    .form {
        display: flex;
        justify-content: center;
        background-color: #f0f0f0;
        border-radius: 10px;
        flex-direction: column;
        padding: 20px 45px;
    }
    .login__title {
        color: #000;
        margin-bottom: 20px;
        font-weight: bold;
        letter-spacing: -1px;
    }
    .login__form {
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        min-height: 150px;
        width: 400px;
    }
    .login__input {
        padding: 5px 10px;
        outline: none;
        width: 100%;
        border: 2px solid #c4c4c4;
        border-radius: 10px;
        &:focus {
            border: 2px solid #8498eb;
        }
    }
    .login__navigation {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .login__next, .login__prev {
        display: flex;
        align-items: center;
    }
    .login__form-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login__gender {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .login__submit {
        width: 90px;
        height: 45px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        padding: 5px;
        margin: 10px auto;
    }
`

function Login() {

    const [amountLoginStep, setAmountLoginStep] = useState(0);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const setPrevStep = () => {
        if(amountLoginStep > 0) {
            setAmountLoginStep((prev) => prev - 1);
        }
    }

    const setNextStep = () => {
        if(amountLoginStep < 3) {
            setAmountLoginStep((prev) => prev + 1);
        }
    }

    const initialFormValues = {
        id: null,
        username: '',
        password: '',
        email: '',
        sex: '',
        age: 0,
        status: '',
    }

    const validateSchema = yup.object().shape({
        username: yup.string().required('Field is required!').min(3, 'Too short!').max(18, 'Too long!'),
        password: yup.string().required('Field is required!').min(4, 'unreliable password!').max(50, 'password is so loong..'),
        email: yup.string().required('Field is required!').email('Invalid email address'),
        age: yup.number().required('Field is required!').positive(),
        status: yup.string().required('Field is required!').max(30, 'Too long!'),
    })

    return (
        <StyledLogin>
            <div className='login'>
                <div className="login__row">
                    <Formik initialValues={initialFormValues} validationSchema={validateSchema} onSubmit={(formValues) => {
                        console.log(formValues);
                        dispatch(userLoggedIn(formValues.username));
                        navigate(PATH.homePage);
                    }}>
                        <Form className='form'>
                            <h2 className="login__title">Log in</h2>
                            <div className='login__form-wrapper'>
                                {amountLoginStep === 0 &&
                                    <div className="login__form">
                                        <LoginFormikInput name='username' type='text' placeholder='Vasiliy Pupkin' className='login__input login__name' />
                                        <LoginFormikInput name='password' type='password' placeholder='Password' className='login__input login__pass' />
                                        <div className="login__navigation">
                                            <button type='button' className='login__prev' onClick={setPrevStep}><GrFormPrevious /> Prev</button>
                                            <button type='button' className='login__next' onClick={setNextStep}>Next <GrFormNext /></button>
                                        </div>
                                    </div>
                                }
                                {amountLoginStep === 1 &&
                                    <div className="login__form">
                                        <LoginFormikInput name='email' type='email' placeholder='vasiliyPupkin@gmail.com' className='login__input login__email' />
                                        <div className="login__gender">
                                            <LoginFormikInput name='sex' type='radio' value='men' className='login__input login__sex' />
                                            <LoginFormikInput name='sex' type='radio' value='women' className='login__input login__sex' />
                                        </div>
                                        <div className="login__navigation">
                                            <button type='button' className='login__prev' onClick={setPrevStep}><GrFormPrevious /> Prev</button>
                                            <button type='button' className='login__next' onClick={setNextStep}>Next <GrFormNext /></button>
                                        </div>
                                    </div>
                                }
                                {amountLoginStep === 2 &&
                                    <div className="login__form">
                                        <LoginFormikInput value='3' name='age' type='number' placeholder='18' className='login__input login__age' />
                                        <LoginFormikInput name='status' type='text' placeholder='Pretty dude..' className='login__input login__descr' />
                                        <div className="login__navigation">
                                            <button type='button' className='login__prev' onClick={setPrevStep}><GrFormPrevious /> Prev</button>
                                            <button type='button' className='login__next' onClick={setNextStep}>Next <GrFormNext /></button>
                                        </div>
                                    </div>
                                }
                                {amountLoginStep === 3 &&
                                    <div className="login__form">
                                        <h5 className="login__form-title">Everything is ready! Check again the information and press the button!</h5>
                                        <button type='submit' className='login__submit'>Send</button>
                                        <div className="login__navigation">
                                                <button type='button' className='login__prev' onClick={setPrevStep}><GrFormPrevious /> Prev</button>
                                                <button type='button' className='login__next' onClick={setNextStep}>Next <GrFormNext /></button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </StyledLogin>
    )
}

export default Login;