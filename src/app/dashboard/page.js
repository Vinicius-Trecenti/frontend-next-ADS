import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Dashboard() {
    
    return (
        <>
            <Header isLogged={true} />
            <main className="p-5">
                <h1 className="text-3xl text-blue-500">Dashboard</h1>
                <p>
                    fdsfdsfsdf
                </p>

                <p>
                    fdsfsd
                </p>
            </main>
            <Footer />
        </>
    );
}
