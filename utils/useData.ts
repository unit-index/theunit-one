import { useEffect, useState } from "react"
  
export default function useData<T>(url: string) {
  
    const [data, setData] = useState<T|undefined>()
    const [error, setError] = useState<any>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await fetch(url)
                    const rdata = await response.json();
                    if (rdata.items?.length >= 3) {
                        console.log('AAAA')
                        setData(rdata.items.slice(0, 3) as T)
                    }
                } catch(err){
                    setError(err)
                } finally{
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading }
  
}
