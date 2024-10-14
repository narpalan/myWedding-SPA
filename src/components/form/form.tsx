'use client'

import { useState } from 'react';
import { setNewRSVP } from '@/actions';
import Msg from './components/msg';
import CustomInput from './components/input';

const formFields = ['fullName', 'mobile'];

const Form = (): React.JSX.Element => {

    const [submitted, setSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);

    const handleForm = async (formData: FormData) => {
        setFormError(false);
        try {
            await setNewRSVP(formData);
        } catch (er) {
            setFormError(true); 
            return;           
        }       
        
        setSubmitted(true);
    };
    
    return (
        <>      
                             
            {submitted && !formError
                ? <Msg />
                : <form action={handleForm} className="flex flex-col mt-[1.31rem] text-justify items-center px-5">
                    <p className='indent-8'>Para garantir a entrada, <span className='font-bold'>CADA CONVIDADO</span> deve preencher o formulário abaixo, <span className='font-bold'>SEPARADAMENTE!</span></p>                    
                    <p className='indent-8'>Ainda que o nome esteja na lista (cadastrado pelo formulário) é <span className='font-bold'>INDISPENSÁVEL</span> a apresentação do convite individual na entrada.</p>
                    <div className='flex flex-col lg:flex-row lg:gap-x-20 pt-5'>
                        {formFields.map((field, index) => (                            
                            <CustomInput key={index} name={field} />                            
                        ))}
                    </div>
                    <button aria-label='Confirmar cadastro de presença' className="text-center rounded-3xl bg-mossGreen w-[16.31rem] h-[3.06rem] my-6" type='submit'>
                        <p>Cadastrar!</p>
                    </button>
                </form>
            }
        </>
    )
}

export default Form;
