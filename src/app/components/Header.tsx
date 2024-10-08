export default function Header(){
    return(
        <header className="bg-orange-500 border-2 border-y-black border-x-orange-500 flex items-center gap-4 justify-evenly h-11 mb-4 w-[90%] mx-auto sticky top-4">
            <div>
                <p>Logo</p>
            </div>
            <nav>
                <a className="font-semibold" href="">Github</a>
            </nav>
        </header>
    )
}