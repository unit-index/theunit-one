import Header from "./Header";

export default function MainLayout({children} : {children: React.ReactNode}) {
    return <>
        <Header />
        <div className="bg-gradient-radial">
        { children }
        </div>
    </>
}