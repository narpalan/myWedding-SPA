const placeHolders: { [key: string]: string } = {
    name: 'Nome',
    email: 'Email',
    mobile: 'Celular (xx) xxxxx-xxxx',
    fullName: 'Nome Completo (sem abreviações)',
}

const CustomInputTwo = ({ name, error }: { name: string, error?: string }): React.JSX.Element => {
    return (
        <div className="flex flex-col">
            <input
                className={`bg-slate-100 rounded mt-[0.69rem] py-[0.62rem] pl-[0.62rem] text-black w-[300px] lg:w-[440px] ${error ? 'border-red-500 border-2' : ''}`}
                type={name === 'email' ? 'email' : 'text'}
                placeholder={placeHolders[name]}
                name={name}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

export default CustomInputTwo;