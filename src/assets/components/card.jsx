export default function Card({ char }) {
    const imgLength = Number(char.images.length - 1)

    return (
        <div>
            <div>{char.name}</div>

            <img src={`${char.images[imgLength]}`} alt="" />
        </div>
    )

}