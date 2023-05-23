import { averageLifeExpectancyInYears, currentWorldPopulation } from "@/utils/constants";
import { numberWithCommas } from "@/utils/numberWithCommas";

export default function Accounted({
    title,
    usdData,
} : {
    title: string,
    usdData?: number,
}) {

    const isUSD = Boolean(usdData);
    let accountedValue = averageLifeExpectancyInYears * currentWorldPopulation;
    if (usdData) {
        accountedValue *= usdData
    }

    return <div className="text-center">
            <div className="text-gray-light mb-2 sm:mb-5">
                {title}
            </div>
            <div className={"font-bold sm:text-5xl text-white " + (isUSD ? 'line-through' : '')}>
                {isUSD ? '$' : 'Ø'}{numberWithCommas(accountedValue)}
            </div>
    </div>
}