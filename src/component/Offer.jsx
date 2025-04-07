import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
// import data from "../../public/outils.json"
import fire  from "../../public/fire.png"
import { useEffect, useState } from "react";
export default function Offer() {
  let [data, setData] = useState([])
  const [state, setState] = useState([]);
  useEffect(() => {
 
    fetch("/outils.json").then(res => res.json()).then(eles => { 
      setData(eles)
    }
    )
  }, []);
  useEffect(() => { 
    if (data.length > 0) {
      let laptopArray = data.length > 0 ? data[0].laptop : "";
      console.log(laptopArray)
    let imprimentsArray =data.length > 0 ? data[0].impriments:"";
    let items = laptopArray.concat(imprimentsArray);
    let elements = [];
    let uniqueItems=[...items]
    for (let i = 0; elements.length < 15; ++i){
      elements.push(uniqueItems[Math.floor(Math.random() * uniqueItems.length)])
      elements = [...new Set(elements)]
      setState(elements)
    }
    console.log(elements)
  }
},[data])
    function addToCart(item) {
      let additem = JSON.stringify(item)
      localStorage.setItem(item.id, additem)
      window.dispatchEvent(new Event("cartUpdated"));
  }
  return (
    <div className='offer bg-[#ffddd2] py-7'>
      <div className="container mt-5 mb-12  w-[92%] costum-md:w-[90%] costum-2xl:w-[85%] ">
      <div className="title py-3">
        <p className="flex gap-x-2 text-2xl border-b-thin border-[#ddd] border-solid">
          <h3 className="font-medium  items-center underline underline-offset-8 -decoration--main-color decoration-2">
            Hot</h3>Product<img className="w-[22px] mt-[3px] -ml-1 h-[22px]" src={fire} alt="" />
        </p>
        </div>
        <hr className="mb-8 bg-[#a5a4a4] h-[0.1px] -mt-[11.5px]"/> 

        <div className="grid
gap-5 grid-cols-1 costum-xs:grid-cols-[1fr,1fr] max-[640px]:grid-rows-5 costum-xl:grid-cols-4 min-[1200px]:grid-cols-6">
        {state.map((item,index) =>
                  <>
                       <div  key={item.id}
        className={`item sold p-3 w-full rounded-lg  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mx-auto bg-white flex items-center flex-col justify-center relative  ${index===4?`costum-xs:col-start-1 costum-xs:col-end-3 costum-xs:row-start-3 costum-xs:row-end-5 costum-xl:col-start-3   costum-xl:col-end-5 costum-xl:row-start-1 costum-xl:row-end-3 min-[1300px]:col-start-3 min-[1300px]:col-end-5 min-[1300px]:row-start-1 min-[1300px]:row-end-3`:""} overflow-hidden`}
        data-sold={`-${item.sold}%`}
            >
        
        <img className={`${index !== 4 ?  ` costum-sm:w-[450px] p-2` : " costum-sm:w-[450px] p-4"} w-[250px] product-imgOne`} src={item.mainImg} alt="" />
              <img className={`${index !== 4 ? ` costum-sm:w-[150px] p-2` : " costum-sm:w-[850px] p-4"} w-[250px] product-imgTwo absolute  top-0 `} src={item.relatedImg[1]} alt="" />
                    <ul className={`${index !== 4 ? `product-action relative costum-sm:opacity-0 costum-sm:absolute` : ""} absolute z-10 flex items-center gap-5 costum-sm:left-[calc(50%-80px)] costum-sm:top-[62%] costum-md:top-[62%] costum-xl:top-[56%] costum-2xl:top-[51%]  costum-3xl:top-[55%]`}>
          <li className="p-2 border-solid -border--thin  border-[#777] rounded-full cursor-pointer w-10 h-10 flex justify-center items-center text-center transition-all duration-300 hover:-bg--main-color  hover:text-white hover:border-transparent ">
            <i className="fa-regular fa-heart"></i>
          </li>
          <Link onClick={()=>addToCart(item)} to={`allProducts/field/${item.id}?gender=${item.machine}`} state={{search:`gender=${item.machine}`}}> <li className="p-2 border-solid -border--thin  border-[#777] rounded-full cursor-pointer w-10 h-10 flex justify-center items-center text-center transition-all duration-300 hover:-bg--main-color  hover:text-white hover:border-transparent ">
            <i className="fa-solid fa-magnifying-glass"></i>
          </li></Link>
          <li className="p-2 border-solid -border--thin  border-[#777] rounded-full cursor-pointer w-10 h-10 flex justify-center items-center text-center transition-all duration-300 hover:-bg--main-color  hover:text-white hover:border-transparent ">
            <i className="fa-solid fa-share"></i>
          </li>
        </ul>
      <h1 className={` ${index !== 4 ? `product-name text-sm h-[70px]` : "text-lg"}  pt-8   overflow-hidden text-center  px-2 `}>{item.name}</h1>
        <ul className={` ${index !== 4 ? `rating ` : ""} flex justify-center items-center gap-2 py-3 -text--main-color`}>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-regular fa-star"></i>
          </li>
        </ul>
        <span className={` ${index !== 4 ? `price ` : ""} flex justify-center items-center  text-lg gap-1 pb-3`}>
          <span className={`${index !== 4 ? `text-[16px] ` : "text-[21px] mr-4"} -text--main-color `}>{item.price} DA</span>
          <span className={`${index !== 4 ? `text-[16px] ` : "text-[21px] "} text-[#777] line-through `}>{item.old_price?item.old_price + "DA":""}</span>
        </span>
        <button onClick={()=>addToCart(item)}  className={` ${index!==4 ?`add costum-sm:opacity-0 relative costum-sm:bottom-[-50px] costum-sm:absolute  before:absolute`:"relative before:absolute"}  outline-none overflow-hidden bg-[#000]  py-4 w-3/4 text-white rounded-full block mx-auto text-center
                costum-xs:mb-8 
                 hover:text-white transition duration-300 
                   before:w-[120%] before:h-full before:left-[-10%] before:transition before:duration-300
                 before:top-0 before:skew-x-[30deg] before:-bg--main-color hover:before:translate-x-full `}>
               <span className=" relative z-10 transition-colors duration-300 "> Add to Cart</span>
              </button>
                </div>
                  </>
            
         )}
</div>
          </div> 
    </div>
  )
}
