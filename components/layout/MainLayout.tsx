import { Suspense } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "../Loading";

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