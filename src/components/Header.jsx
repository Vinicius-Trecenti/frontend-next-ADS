import { BsGraphUp } from "react-icons/bs";

export default function Header() {
    return (
        <div className="flex bg-black h-14 dark:bg-neutral-900 items-center p-5">
            <BsGraphUp className="text-blue-500 text-4xl"/>
        </div>
    );
}