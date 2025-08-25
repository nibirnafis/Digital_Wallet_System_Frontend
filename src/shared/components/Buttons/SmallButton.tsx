interface IProps {
    title: string,
}

const SmallButton = ({title}: IProps) => {
    return (
        <button className="bg-yellow-300 rounded-xl p-1 font-bold">{title}</button>
    );
};

export default SmallButton;