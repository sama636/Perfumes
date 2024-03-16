import { atom  } from "recoil"
export const $Current_Width = atom({
    key : "$Current_Width",
    default: window.innerWidth
}) 
export const $Side_Menu_Index = atom({
    key : "$Side_Menu_Index",
    default: false
})