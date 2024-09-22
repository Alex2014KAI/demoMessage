// import classesUsers from '../Users.module.css';
import classesPaginator from './Paginator.module.css';

import arrowLeft from "../../../assets/images/arrowLeft.svg";
import arrowRight from "../../../assets/images/arrow-right.svg";

import { useState } from 'react';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChenged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);  // Число порций
    let numberPage = [];
    for (let i = 1; i <= pagesCount; i++) {
        // for (let i = 1; i <= 10; i++) {
        numberPage.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);  // Текущая порция
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; // Номер начала юзера левой порции
    let rightPortionPageNumber = portionNumber * portionSize;

    return (<div className={classesPaginator.paginator}>
        {
            portionNumber > 1 ? (<span className={classesPaginator.prev} onClick={() => { 
                setPortionNumber(portionNumber - 1);
                onPageChenged((portionNumber-2)*pageSize+1);
                }}>
                <img alt='Назад' src={arrowLeft} />
            </span>) : (<span> {null} </span>)
        }
        {
            numberPage.filter(p => {
                return p >= leftPortionPageNumber && p <= rightPortionPageNumber
            })
                .map(number => {
                    return <div className={currentPage == number
                        ? classesPaginator.pageNumber__activ
                        : classesPaginator.pageNumber}
                        onClick={() => { onPageChenged(number) }}
                    >
                        {number}
                    </div>
                })
        }
        {
            portionNumber < portionCount
                ? (<span className={classesPaginator.next} onClick={() => {
                    setPortionNumber(portionNumber + 1);
                    onPageChenged(portionNumber*pageSize+1);
                }}>
                    <img alt='Вперед' src={arrowRight} />
                </span>)
                : (<span> {null} </span>)
        }
    </div>)
}


export default Paginator;