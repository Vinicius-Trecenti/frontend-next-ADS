export default function Footer() {
    return (
        <div className={style.footer}>
            <p>Copyright 2024© Vinicius Trecenti</p>
        </div>
    ); 
}

const style = {
    footer: "flex justify-center h-[200px] bg-neutral-800 text-white items-center"
}