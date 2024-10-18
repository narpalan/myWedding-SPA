'use client';

import { useState } from 'react';
import { setNewRSVP } from '@/actions';
import Msg from './components/msg';
import CustomInputTwo from './components/input-two';

const formFields = ['fullName', 'mobile'];

const FormTwo = (): React.JSX.Element => {

    const [submitted, setSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({}); // State for individual field errors

    const handleForm = async (formData: FormData) => {
        setFormError(false);
        setFieldErrors({});
        
        const res = await setNewRSVP(formData);

        if (res.message === 'em branco') {            
            setFormError(true);
            setFieldErrors({
                fullName: 'Nome completo é obrigatório.',
                mobile: 'Número de celular é obrigatório.'                
            });
        } else if (res.message === 'Convidado/Acompanhante já cadastrado') {            
            setFormError(true);
            setFieldErrors({
                fullName: 'Nome já cadastrado.'
            });
        } else if (res.message != null) {
            setFormError(true);
        }
        setSubmitted(true);
        return;       
    };
    
    return (
        <>      
            {submitted && !formError
                ? <Msg />
                : <form action={handleForm} className="flex flex-col mt-[1.31rem] text-justify items-center px-5">
                    <p className='indent-8'>Para garantir a entrada, <span className='font-bold'>CADA CONVIDADO/ACOMPANHANTE</span> deve preencher o formulário abaixo, <span className='font-bold'>SEPARADAMENTE!</span></p>                    
                    <p className='indent-8'>Ainda que o nome esteja na lista (cadastrado pelo formulário) é <span className='font-bold'>INDISPENSÁVEL</span> a apresentação do convite individual na entrada.</p>
                    <div className='flex flex-col lg:flex-row lg:gap-x-20 pt-5'>
                        {formFields.map((field, index) => (
                            <CustomInputTwo
                                key={index}
                                name={field}
                                error={fieldErrors[field]}// Pass the error to CustomInput
                            />                            
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

export default FormTwo;