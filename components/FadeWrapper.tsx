'use client'

import { ReactNode } from 'react';
import { Fade } from 'react-awesome-reveal';

export default function FadeWrapper({children} : {children: ReactNode}) {
    return <Fade direction="up" cascade triggerOnce>
        {children}
    </Fade>
}