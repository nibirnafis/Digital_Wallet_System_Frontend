interface IProps {
    title: string
}

const SmallButton = ({title}: IProps) => {
    return (
        <button className="bg-yellow-300">{title}</button>
    );
};

export default SmallButton;