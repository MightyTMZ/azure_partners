import { StaticImageData } from "next/image";

export interface Event {
    icon: React.ReactNode | string | StaticImageData;
    title: string;
    description: string;
}