import { useState } from "react";
import { Link,NavLink } from "react-router-dom";
export  default function Annapurna() {
    let [count, setCount] = useState(0)
  let plus=()=>{
    count=count+1;
    setCount(count);
  }
  let [count1, setCount1] = useState(0)
  let plus1=()=>{
    count1=count1+1;
    setCount1(count1);
  }
  let [count2, setCount2] = useState(0)
  let plus2=()=>{
    count2=count2+1;
    setCount2(count2);
  }
  let [count3, setCount3] = useState(0)
  let plus3=()=>{
    count3=count3+1;
    setCount3(count3);
  }
  let [count4, setCount4] = useState(0)
  let plus4=()=>{
    count4=count4+1;
    setCount4(count4);
  }
  let [count5, setCount5] = useState(0)
  let plus5=()=>{
    count5=count5+1;
    setCount5(count5);
  }
  let [count6, setCount6] = useState(0)
  let plus6=()=>{
    count6=count6+1;
    setCount6(count6);
  }
  let [count7, setCount7] = useState(0)
  let plus7=()=>{
    count7=count7+1;
    setCount7(count7);
  }
  let [count8, setCount8] = useState(0)
  let plus8=()=>{
    count8=count8+1;
    setCount8(count8);
  }
  let [count9, setCount9] = useState(0)
  let plus9=()=>{
    count9=count9+1;
    setCount9(count9);
  }
  let minus=()=>{
    count=count-1;
    if(count<0)
      {
        count=0;
      }
    setCount(count);
  }
  let minus1=()=>{
    count1=count1-1;
    if(count1<0)
      {
        count1=0;
      }
    setCount1(count1);
  }
  let minus2=()=>{
    count2=count2-1;
    if(count2<0)
      {
        count2=0;
      }
    setCount2(count2);
  }
  let minus3=()=>{
    count3=count3-1;
    if(count3<0)
      {
        count3=0;
      }
    setCount3(count3);
  }
  let minus4=()=>{
    count4=count4-1;
    if(count4<0)
      {
        count4=0;
      }
    setCount4(count4);
  }
  let minus5=()=>{
    count5=count5-1;
    if(count5<0)
      {
        count5=0;
      }
    setCount5(count5);
  }
  let minus6=()=>{
    count6=count6-1;
    if(count6<0)
      {
        count6=0;
      }
    setCount6(count6);
  }
  let minus7=()=>{
    count7=count7-1;
    if(count7<0)
      {
        count7=0;
      }
    setCount7(count7);
  }
  let minus8=()=>{
    count8=count8-1;
    if(count8<0)
      {
        count8=0;
      }
    setCount8(count8);
  }
  let minus9=()=>{
    count9=count9-1;
    if(count9<0)
      {
        count9=0;
      }
    setCount9(count9);
  }
  

    return (
        <>
        
          <div className=' flex gap-20 mt-8 mb-20 ml-10'>
            <div >
            <img className='rounded-3xl h-48 w-48 hover:scale-125 transition duration-500 cursor-pointer' src="parotha.webp" alt="" /> 
            <p className='ml-14'><b>Parotha</b></p>
            <p className='ml-14'><b>Price:</b>40₹</p>
           <p className='flex gap-3 mt-3 ml-8'><img onClick={plus} className='h-8 w-8 cursor-pointer' src="plus.gif" alt="" />{count}<img onClick={minus} className='h-8 w-8 cursor-pointer' src="minus.png" alt="" /></p>
            </div>
            <div>
            <img className='rounded-3xl h-48 w-48 hover:scale-125 transition duration-500 cursor-pointer ' src="vegmeals.webp" alt="" /> 
            <p className='ml-14'><b>Veg Meals</b></p>
            <p className='ml-14'><b>Price:</b>₹50</p>
           <p className='flex gap-3 mt-3 ml-8'><img onClick={plus1} className='h-8 w-8 cursor-pointer' src="plus.gif" alt="" />{count1}<img onClick={minus1} className='h-8 w-8 cursor-pointer' src="minus.png" alt="" /></p>
            </div>
            <div>
            <img className='rounded-3xl h-48 w-48 hover:scale-125 transition duration-500 cursor-pointer ' src="vegbiryani.webp" alt="" /> 
            <p className='ml-14'><b>Veg Biryani</b></p>
            <p className='ml-14'><b>Price:</b>70₹</p>
           <p className='flex gap-3 mt-3 ml-8'><img onClick={plus2} className='h-8 w-8 cursor-pointer' src="plus.gif" alt="" />{count2}<img onClick={minus2} className='h-8 w-8 cursor-pointer' src="minus.png" alt="" /></p>
            </div>
            <div>
            <img className='rounded-3xl h-48 w-48 hover:scale-125 transition duration-500 cursor-pointer ' src="uggani.webp" alt="" /> 
            <p className='ml-14'><b>Uggani</b></p>
            <p className='ml-14'><b>Price:</b>40₹</p>
           <p className='flex gap-3 mt-3 ml-8'><img onClick={plus3} className='h-8 w-8 cursor-pointer' src="plus.gif" alt="" />{count3}<img onClick={minus3} className='h-8 w-8 cursor-pointer' src="minus.png" alt="" /></p>
            </div>
            <div>
            <img className='rounded-3xl h-48 w-48 hover:scale-125 transition duration-500 cursor-pointer ' src="dosa.webp" alt="" /> 
            <p className='ml-14'><b>Dosa</b></p>
            <p className='ml-14'><b>Price:</b>40₹</p>
           <p className='flex gap-3 mt-3 ml-8'><img onClick={plus4} className='h-8 w-8 cursor-pointer' src="plus.gif" alt="" />{count4}<img onClick={minus4} className='h-8 w-8 cursor-pointer' src="minus.png" alt="" /></p>
            </div>                    
          </div>
          <div className=' flex gap-20 mt-8 ml-10 mb-10 '>
          <div>
            <img className='rounded-3xl h-48 w-48 hover:scale-125 transition duration-500 cursor-pointer ' src="idly.webp" alt="" /> 
            <p className='ml-14'><b>Idly</b></p>
            <p className='ml-14'><b>Price:</b>40₹</p>
           <p className='flex gap-3 mt-3 ml-8'><img onClick={plus5} className='h-8 w-8 cursor-pointer' src="plus.gif" alt="" />{count5}<img onClick={minus5} className='h-8 w-8 cursor-pointer' src="minus.png" alt="" /></p>
            </div>
            <div>
            <img className='rounded-3xl h-48 w-48 hover:scale-125 transition duration-500 cursor-pointer ' src="bonda.webp" alt="" /> 
            <p className='ml-14'><b>Bonda</b></p>
            <p className='ml-14'><b>Price:</b>40₹</p>
           <p className='flex gap-3 mt-3 ml-8'><img onClick={plus6} className='h-8 w-8 cursor-pointer' src="plus.gif" alt="" />{count6}<img onClick={minus6} className='h-8 w-8 cursor-pointer' src="minus.png" alt="" /></p>
            </div>
            <div>
            <img className='rounded-3xl h-48 w-48 hover:scale-125 transition duration-500 cursor-pointer ' src="tea.webp" alt="" /> 
            <p className='ml-14'><b>Tea</b></p>
            <p className='ml-14'><b>Price:</b>20₹</p>
           <p className='flex gap-3 mt-3 ml-8'><img onClick={plus7} className='h-8 w-8 cursor-pointer' src="plus.gif" alt="" />{count7}<img onClick={minus7} className='h-8 w-8 cursor-pointer' src="minus.png" alt="" /></p>
            </div>
            <div>
            <img className='rounded-3xl h-48 w-48 hover:scale-125 transition duration-500 cursor-pointer ' src="coffee.webp" alt="" /> 
            <p className='ml-14'><b>Coffee</b></p>
            <p className='ml-14'><b>Price:</b>20₹</p>
           <p className='flex gap-3 mt-3 ml-8'><img onClick={plus8} className='h-8 w-8 cursor-pointer ' src="plus.gif" alt="" />{count8}<img onClick={minus8} className='h-8 w-8 cursor-pointer' src="minus.png" alt="" /></p>
            </div>
            <div>
            <img className='rounded-3xl h-48 w-48 hover:scale-125 transition duration-500 cursor-pointer ' src="boost.webp" alt="" /> 
            <p className='ml-14'><b>Boost</b></p>
            <p className='ml-14'><b>Price:</b>20₹</p>
           <p className='flex gap-3 mt-3 ml-8'><img onClick={plus9} className='h-8 w-8 cursor-pointer' src="plus.gif" alt="" />{count9}<img onClick={minus9} className='h-8 w-8 cursor-pointer' src="minus.png" alt="" /></p>
            </div>                     
          </div>


      </>
    );
}


