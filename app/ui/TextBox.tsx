interface Props {
    text: string
    header: string
}

const TextBox: React.FC<Props> = ({ text, header = "" }) => {
    return (
        <div className={`flex justify-center items-center flex-col gap-2 bg-[white] shadow-2xl h-1/4 min-h-48 md:h-1/3 rounded-xl w-11/12 md:w-1/3 min-w-96 items-center justify-center`}>
            <p className={`${header != "" ? '' : 'hidden'} text-4xl text-red-400 justify-center items-center flex`}>{header}</p>
            <p className="items-center justify-center p-5 text-lg">
                {text}
            </p>
        </div>
    )
}

export default TextBox;