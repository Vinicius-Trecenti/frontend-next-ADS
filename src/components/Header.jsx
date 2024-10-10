import { BsGraphUp } from "react-icons/bs";
import { FaRegUserCircle as IconUser } from "react-icons/fa";


export default function Header({isLogged, user}) {
    return (
        <div className="flex bg-blue-900 h-14 dark:bg-neutral-900 items-center p-5 justify-between">

            <BsGraphUp className="text-blue-400 text-4xl"/>

            {isLogged && <p className="text-white">{user?.nome} tem a idade de {user?.idade}</p>}

            {isLogged && <IconUser className="text-blue-500 text-4xl"/>}
            
        </div>
    );
}