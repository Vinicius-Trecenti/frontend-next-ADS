export default function Footer() {
    return (
        <div className={style.footer}>
            <p>Copyright 2024© Vinicius Trecenti</p>
        </div>
    ); 
}

const style = {
    footer: "flex justify-center h-[200px] bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white items-center"
}