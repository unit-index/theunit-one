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
            <div className={"mb-2 sm:mb-5 font-bold sm:text-5xl " + (isUSD ? 'line-through text-unit-blue' : 'text-unit-orange')}>
                {isUSD ? '$' : 'Ø'}{numberWithCommas(accountedValue)}
            </div>
            <div className="text-gray-light">
                {title}
            </div>
    </div>
}