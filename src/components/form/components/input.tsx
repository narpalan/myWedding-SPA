const placeHolders: { [key: string]: string } = {
    name: 'Nome',
    email: 'Email',
    mobile: 'Celular (xx) xxxxx-xxxx',
    fullName: 'Nome Completo (sem abreviações)',
}

const CustomInput = ({ name }: { name: string }): React.JSX.Element => {

    return (
        <input
            className="rounded mt-[0.69rem] py-[0.62rem] pl-[0.62rem] text-black"
            type={name === 'email' ? 'email' : 'text'}
            placeholder={placeHolders[name]}
            name={name}
        />
    );
}

export default CustomInput;