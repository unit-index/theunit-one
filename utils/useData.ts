import { useEffect, useState } from "react"
  
export default function useData<T>(url: string, enabled: boolean = true) {
  
    const [data, setData] = useState<T|undefined>()
    const [error, setError] = useState<any>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!enabled) {
            return;
        }

        (
            async function(){
                try{
                    setLoading(true)
                    const response = await fetch(url)
                    const rdata = await response.json();
                    setData(rdata)
                } catch(err){
                    setError(err)
                } finally{
                    setLoading(false)
                }
            }
        )()
    }, [url, enabled])

    return { data, error, loading }
  
}
