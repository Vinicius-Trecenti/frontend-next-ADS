import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {

    const user = {
        nome: "Vinicius Trecenti",
        idade: 21
    }

    return (
        <>
            <Header isLogged={true} user={user} />

            <main className="p-5">
                <h1 className="text-3xl text-blue-500">Sobre o React</h1>

                <Image
                    src={'/img/logo.png'}
                    width={500} 
                    height={500}
                    alt="Logo React"
                />

                <p>
                    fdsfdsfsdf
                </p>

                <p>
                    fdsfsd
                </p>
                <Link href="/dashboard">Dashboard</Link>
            </main>

            <Footer />
        </>
    );
}
