import { Suspense } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "@/app/[locale]/loading";

export default function MainLayout({children} : {children: React.ReactNode}) {
    return <>
        <Header />
        <main>
            <Suspense fallback={<Loading />}>
                { children }
            </Suspense>
        </main>
        <Footer />
    </>
}