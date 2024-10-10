import { IoMdTrendingUp } from "react-icons/io";
import { IoMdTrendingDown } from "react-icons/io";


export default function CardTicker({ titulo, texto, valor, codigo, variacao, numeroAcoes }) {
    return (
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-white-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform duration-300 hover:scale-105">
            
            <div class="flex justify-between">
                <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline">
                    {titulo}
                </h5>

                {numeroAcoes > 0  &&
                    <IoMdTrendingUp class="text-green-500 text-2xl"/>
                }
                
                {numeroAcoes < 0 &&
                    <IoMdTrendingDown class="text-red-500 text-2xl"/>
                }
                
            </div>

            <p class="font-normal text-gray-700 dark:text-gray-400 mb-2">
                <span class="font-bold">Empresa</span>: {texto}
            </p>

            <p class="font-normal text-gray-700 dark:text-gray-400">
                <span class="font-bold">Código</span>:
                <span class="text-blue-500 font-bold"> {codigo}</span> 
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                <span class="font-bold">Valor</span>:
                    <span class="text-blue-500 font-bold"> R${valor}</span> 
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                <span class="font-bold">Variação</span>:
                <span class="text-blue-500 font-bold"> {variacao}%</span> 
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                <span class="font-bold">Número de ações</span>:
                <span class="text-blue-500 font-bold"> {numeroAcoes}</span> 
            </p>
            
            
            <div class="flex justify-center mt-2">
                <button class="bg-blue-500 p-1 rounded-md text-white hover:bg-blue-600">
                    Acessar
                </button>
            </div>

        </div>
    ); 
}