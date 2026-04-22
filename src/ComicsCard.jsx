export default function ComicsCard({ src, alt, h4 }) {
    return (
        <div>
            <img src={src} alt={alt} />
            <h4>{h4}</h4>
        </div>
    )
}
// chiedere a massimo del perche se io metto nel promp promp.thumb promp.series non funziona 

