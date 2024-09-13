'use client'

import { useState } from 'react';
import { setNewRSVP } from '@/actions';
import Msg from './components/msg';
import CustomInput from './components/input';
import Divider from '../divider/divider';

const formFields = ['fullName', 'mobile'];

const Form = (): React.JSX.Element => {

    const [submitted, setSubmitted] = useState(false);

    const handleForm = async (formData: FormData) => {
        await setNewRSVP(formData);
        setSubmitted(true);
    };
    
    return (
        <>
            <Divider text='Confirmar Presença'/>
            {submitted
                ? <Msg />
                : <form action={handleForm} id="rsvp" className="flex flex-col mt-[1.31rem] items-center">
                    <div className='flex flex-col lg:flex-row lg:gap-x-20 '>
                        {formFields.map((field, index) => (                            
                            <CustomInput key={index} name={field} />                            
                        ))}
                    </div>
                    <button className="text-center rounded-3xl bg-mossGreen w-[16.31rem] h-[3.06rem] my-6" type='submit'>
                        <p>Cadastrar!</p>
                    </button>
                </form>
            }
        </>
    )
}

export default Form;
