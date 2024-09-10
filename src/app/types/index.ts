import { StaticImageData } from "next/image"

export type CardType = {
    id:number,
    img: StaticImageData
    title:string,
    description:string,
}