'use client'

import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';

export default function SplineClient({url} : {url: string}) {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    if (!loaded) {
        return null;
    }

    return <Spline scene={url} />
}