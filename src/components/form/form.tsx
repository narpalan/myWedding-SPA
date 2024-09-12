import { setNewRSVP } from '@/actions';
import Msg from './components/msg';
import CustomInput from './components/input';

const formFields = ['fullName', 'mobile'];

const Form = (
    { searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }
): React.JSX.Element => {
    const showMsg = searchParams && searchParams.y === 'true';

    return (
        <>
            {showMsg
                ? <Msg />
                : <form action={setNewRSVP} className="flex flex-col mt-[1.31rem]">
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
