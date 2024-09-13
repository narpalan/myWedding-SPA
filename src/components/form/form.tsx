'use client'

import { useState } from 'react';
import { setNewRSVP } from '@/actions';
import Msg from './components/msg';
import CustomInput from './components/input';

const formFields = ['fullName', 'mobile'];

const Form = (): React.JSX.Element => {

    const [submitted, setSubmitted] = useState(false);

    const handleForm = async (formData: FormData) => {
        await setNewRSVP(formData);
        setSubmitted(true);
    };
    
    return (
        <>
            {submitted
                ? <Msg />
                : <form action={handleForm} id="rsvp" className="flex flex-col mt-[1.31rem]">
                    {formFields.map((field, index) => (
                        <CustomInput key={index} name={field} />
                    ))}
                    <button className="place-self-center text-center mt-[5.12rem] rounded-3xl bg-orange-700 w-[16.31rem] h-[3.06rem]" type='submit'>
                        <p>Cadastrar!</p>
                    </button>
                </form>
            }
        </>
    )
}

export default Form;
