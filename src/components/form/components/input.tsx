const placeHolders: { [key: string]: string } = {
    name: 'Nome',
    email: 'Email',
    mobile: 'Celular (xx) xxxxx-xxxx',
    fullName: 'Nome Completo (sem abreviações)',
}

const CustomInput = ({ name }: { name: string }): React.JSX.Element => {

    return (
        <input
            className="bg-slate-100 rounded mt-[0.69rem] py-[0.62rem] pl-[0.62rem] text-black w-[300px] lg:w-[440px]"
            type={name === 'email' ? 'email' : 'text'}
            placeholder={placeHolders[name]}
            name={name}
        />
    );
}

export default CustomInput;