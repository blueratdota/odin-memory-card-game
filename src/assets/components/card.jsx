export default function Card({ char, cardClick }) {
    const imgLength = Number(char.images.length - 1)
    const firstName = (() => {
        if (char.name.length > 15) {
            return char.name.split(" ", 1)
        }
        else return char.name
    })()

    return (
        <div onClick={() => cardClick(char)} className="border border-black rounded-md flex flex-col justify-between gap-3 h-90 p-4 shadow-lg bg-gray-200" >
            <div className="text-black text-m text-center font-bold flex justify-center items-center ">{firstName}</div>

            <img src={`${char.images[imgLength]}`} className="h-60 object-cover border border-black" />
        </div>
    )

}