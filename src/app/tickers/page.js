import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import CardTicker from "@/components/CardTicker";

export default function Tickers() {


    return (
        <>
            <Header isLogged={true} />

            <main className="p-5">
                <h1 className="text-3xl text-blue-500">Tickers</h1>

                <div className="flex flex-1 gap-4 mt-4 mb-4">

                    <CardTicker
                        titulo={"BBAS3"}
                        texto={"Banco do Brasil."}
                        valor={45.56}
                        codigo={"BBAS3"}
                        variacao={0.35}
                        numeroAcoes={80}
                    />

                    <CardTicker
                        titulo={"PETR4 "}
                        texto={"Petrobras do Brasil."}
                        valor={45.11}
                        codigo={"PETR4"}
                        variacao={0.85}
                        numeroAcoes={-1}
                    />

                </div>

            </main>

            <Footer />
        </>
    );
}
