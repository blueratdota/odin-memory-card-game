export default function Card({ char, cardClick }) {
    const imgLength = Number(char.images.length - 1)

    return (
        <div onClick={() => cardClick(char)}>
            <div>{char.name}</div>

            <img src={`${char.images[imgLength]}`} alt="" />
        </div>
    )

}