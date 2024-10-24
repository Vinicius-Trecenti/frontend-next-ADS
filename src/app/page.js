import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Logo from ".././public/img/logo.png";

export default function Home() {

    const user = {
        nome: "Vinicius Trecenti",
        idade: 21
    }

    return (
        <>
            <Header isLogged={true} user={user} />

            <main className="p-5">
                <h1 className="text-3xl text-blue-700">Bem vindo</h1>

                <div className="flex justify-center">
                    <Image
                        src={Logo}
                        width={500} 
                        height={500}
                        alt="Logo React"
                    />
                </div>

                <p className="font-bold">
                    Bem-vindo ao <span className="text-blue-600">IFinance!</span>
                </p>

                <p className="">
                    Estamos felizes em tê-lo aqui! No iFinance, nosso objetivo é transformar a maneira como você lida com suas finanças. Oferecemos ferramentas e recursos projetados para ajudá-lo a alcançar suas metas financeiras, seja economizando, investindo ou planejando seu futuro.

                    Explore nossos artigos, dicas e calculadoras financeiras para tomar decisões informadas e construir uma vida financeira saudável. Junte-se à nossa comunidade e comece a sua jornada rumo à liberdade financeira hoje mesmo!

                    Se precisar de ajuda, nossa equipe está sempre à disposição. Vamos juntos conquistar seus objetivos!
                </p>
                <Link href="/dashboard">Dashboard</Link>
            </main>

            <Footer />
        </>
    );
}
