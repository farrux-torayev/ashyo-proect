
import { MouseEventHandler, ReactNode } from "react";

export interface ButtonType {
    icon?:ReactNode,
    iconPosition?:"left" | "right", // Literal Types 
    title?:string,
    extraStyle?:string
    onClick?: MouseEventHandler<HTMLButtonElement>
    type:"submit" | "button",
}
