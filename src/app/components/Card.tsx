import Image from "next/image";
import { CardType }   from "../types";
export default function Card({ id, img, title, description } : CardType){
    return(
        <div className={`col-span-3 border-4 border-black rounded-xl grid grid-cols-subgrid gap-2 transition-transform duration-100 hover:scale-105`}>
            <div className="mx-auto rounded-lg overflow-hidden my-4 col-span-3">
                <Image className="object-cover" src={img} width={400} height={400} alt={`${title}`} />
            </div>
            <h1 className="text-2xl font-bold text-center col-span-3">{title}</h1>
            <p className="font-semibold leading-7 col-span-3 mx-7">{description}</p>
        </div>
    )
}