export default function Image({fileName, alt, width = 20, height = 20}) {
    return <img src={require(`./images/${fileName}`)} width={width} height={height} alt={alt} />;
}