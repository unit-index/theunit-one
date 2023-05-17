'use client'

import { useEffect, useState } from "react";
import { averageLifeExpectancyInYears, currentWorldPopulation } from "@/utils/constants";
import { numberWithCommas } from "@/utils/numberWithCommas";
import useData from "@/utils/useData";

export default function Accounted({
    title,
    unit
} : {
    title: string,
    unit: string
}) {

    const isUSD = unit === 'usd';
    const accountedInUNIT = averageLifeExpectancyInYears * currentWorldPopulation;
    const [value, setValue] = useState(0);
    const { data } = useData<any>('https://graph.theunit.one/graphql?query={unitHourlyData(limit:1,currency:"usd"){value}}', isUSD);


    useEffect(() => {
        if (isUSD && data) {
            setValue(data.data.unitHourlyData[0].value * accountedInUNIT)
        } else {
            setValue(accountedInUNIT)
        }
    }, [isUSD, data, accountedInUNIT])

    return <div className="text-center">
            <div className="text-gray-light mb-5">
                {title}
            </div>
            <div className={"font-bold text-5xl text-white " + (isUSD ? 'line-through' : '')}>
                {numberWithCommas(value)}
            </div>
    </div>
}