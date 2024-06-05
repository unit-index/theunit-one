import { Partner as PartnerItem } from "@/sanity.types"

export default function Partners({ partners }: { partners: PartnerItem[]}) {
    return (
        <div className="flex flex-wrap justify-center gap-y-11">
            {partners.map((partner) => (
                <div key={partner.name} className="w-[185px] h-16 flex items-center justify-center">
                    <img className="max-w-full max-h-full" src={partner.logo} />
                </div>
            ))}
        </div>
    )
}
