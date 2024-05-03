export default function Accounted({
    title,
    data,
    isUSD = false,
} : {
    title: string,
    data: string,
    isUSD?: boolean,
}) {

    return <div className="text-center">
            <div className={"mb-2 sm:mb-5 font-bold sm:text-5xl " + (isUSD ? 'line-through text-unit-blue' : 'text-unit-orange')}>
                {data}
            </div>
            <div className="text-gray-light">
                {title}
            </div>
    </div>
}