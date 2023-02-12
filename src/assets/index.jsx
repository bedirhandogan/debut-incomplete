export default function Image({fileName, alt}) {
    return <img src={require(`./images/${fileName}`)} width={20} height={20} alt={alt} />;
}