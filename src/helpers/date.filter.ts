import {Item} from '../types/Items';

export const getCurrentMonth = () =>{
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}


export const FilterListByMonth = (list: Item[], date: string): Item[] => {

    let newList: Item[] = [];
    let [year, mounth] = date.split('-');

    for(let i in list){
        if (list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1 === parseInt(mounth))
        ) {
            newList.push(list[i]);
        }
    }


    return newList;
}


export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let mounth = date.getMonth() + 1;
    let day = date.getDate();


    return `${addZeroToDate(day)}/${addZeroToDate(mounth)}/${year}`;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;