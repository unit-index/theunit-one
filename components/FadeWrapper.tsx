'use client'

import { ReactNode } from 'react';
import { Fade } from 'react-awesome-reveal';

export default function FadeWrapper({isMobile, children} : {isMobile: boolean, children: ReactNode}) {
    return isMobile ? (
        <>{children}</>
    ) : (
        <Fade direction="up" cascade triggerOnce>
            {children}
        </Fade>
    )
}