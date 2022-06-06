import React from 'react'
import './Popup.css'
import { FiArrowLeftCircle } from 'react-icons/fi';
import { FiArrowRightCircle } from 'react-icons/fi';
import video1 from './video/1.mp4'
import video2 from './video/2.mp4'
import video3 from './video/3.mp4'
import { useState } from 'react'
import Last from './Last';
import { Outlet, Link } from "react-router-dom";


const display = [
    {id:1 , videopath:video1, explain:"نیازی به چیدن این همه میوه نداریم. ما برای پیدا کردن عدد زوج و فرد فقط به عددی که در سمت راست نوشته می شود توجه می کنیم. یعنی فقط یکان هر عدد مشخص می کند که آن عدد زوج است یا فرد. در عدد ۳۴ یکان آن ۴ است ، پس عدد ما زوج می باشد. کوشا گفت : پس در عدد ۵۲۷ چون ۷ فرد است ، این عدد سه رقمی هم فرد می باشد."},
    {id:2 , videopath:video2, explain:"همکاری فرایند و کُنشِ گروه‌هایی از جانداران است که با هم برای منافع مشترک، متقابل یا برخی از منافع زیربنایی، کار یا عمل می‌کنند؛ گفته می‌شود. همکاری، نقطهٔ مقابلِ کار کردن برایِ منافع شخصی است"},
    {id:3 , videopath:video3, explain:"تاریخچه هلال احمر از زمانی آمده است که فردی سوئیسی در سال ۱۸۶۳ صلیب سرخ را بنیان نهاد. بعد از آن ترک های عثمانی با توجه به صلیب سرخ سوئیس، سازمانی بشر دوستانه ساختند."}
]

const Popup = () => {

    const [num, setNum] = useState(1)
    const right = () =>{
        if(num<4){
            setNum((pr)=>pr+1)
        }
    }

    const left = () =>{
        if(num>1){
            setNum((pr)=>pr-1)
        }
    }
    console.log(num)
    
  return (
      <>
        <div className='container'>
            {num>0 && num<4 &&
            <div className='hold'>
            <FiArrowLeftCircle className='left'  onClick={left} />
            <FiArrowRightCircle className='right' onClick={right} />
                <p className='matn'>
                    {display[num-1].explain}
                    <Link to="/another"><button>Another page</button></Link>
                    <div className='sh'>
                        <span className={num==1?"col":""}>1</span>
                        <span className={num==2?"col":""}>2</span>
                        <span className={num==3?"col":""}>3</span>
                    </div>
                </p>
                <div className='tasvir'>
                    {num-1==0 &&
                    <video width="250" height="200" controls >
                        <source src={video1} type="video/mp4"/>
                    </video>}
                    {num-1==1 &&
                    <video width="250" height="200" controls >
                        <source src={video2} type="video/mp4"/>
                    </video>}
                    {num-1==2 &&
                    <video width="250" height="200" controls >
                        <source src={video3} type="video/mp4"/>
                    </video>}
                    
                </div>
            </div>}
            {num==4 &&
            <Last left={left}/>}
        </div>
      </>
    
  )
}

export default Popup