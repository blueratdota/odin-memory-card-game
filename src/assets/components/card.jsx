export default function Card({ char, cardClick }) {
    const imgLength = Number(char.images.length - 1)
    const firstName = (() => {
        if (char.name.length > 15) {
            return char.name.split(" ", 1)
        }
        else return char.name
    })()

    return (
        <div onClick={() => cardClick(char)} className="rounded-md flex flex-col justify-between gap-3 h-90 p-4 bg-gray-100 shadow-lg" >
            <div className="text-black text-m text-center font-bold flex justify-center items-center ">{firstName}</div>

            <img src={`${char.images[imgLength]}`} className="h-60 object-cover" />
        </div>
    )

}