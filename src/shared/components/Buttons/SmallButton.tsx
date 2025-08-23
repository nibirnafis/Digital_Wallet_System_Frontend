interface IProps {
    title: string
}

const SmallButton = ({title}: IProps) => {
    return (
        <button className="bg-yellow-400">{title}</button>
    );
};

export default SmallButton;