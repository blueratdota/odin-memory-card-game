import Card from "./card"

export default function CardGrid({ chars }) {
    return (
        chars.map(char => {
            return <Card key={char.id} char={char} />
        })
    )
}