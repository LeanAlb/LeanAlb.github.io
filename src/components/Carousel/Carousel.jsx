import React, { useEffect, useRef, useState } from 'react'
import style from './Carousel.module.css'
import { data } from '../../assets/data';

const Carousel = () => {
    const listRef=useRef();
    const [currentIndex, setCurrentIndex]=useState(0);
    useEffect(()=>{
        const listNode=listRef.current;
        const imgNode=listNode.querySelectorAll("li>img")[currentIndex];
        if(imgNode){
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }

    },[currentIndex])

    const scrollToImage=(direction)=>{
        if(direction==='prev'){
            setCurrentIndex(curr=>{
                const isFirstSlide=currentIndex==0;
                return isFirstSlide? 0: curr-1;
            })
        } else {
            const isLastSlide=currentIndex === data.length-1;
            if(!isLastSlide){
                setCurrentIndex(curr=>curr+1);
            }
        }
    }

    



  return (
    <div className={style.mainContainer}>
        <div className={style.sliderContainer}>
            <div className={style.leftArrow} onClick={()=>scrollToImage('prev')}>&#10092;</div>
            <div className={style.rightArrow} onClick={()=>scrollToImage('next')}>&#10093;</div>

            <div className={style.containerImages}>
                <ul ref={listRef}>
                    {
                        data.map((item)=>{
                            return <li key={item.id}>
                                <img src={item.imgUrl} width={500} height={280} />
                            </li>
                        })
                    }
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Carousel
