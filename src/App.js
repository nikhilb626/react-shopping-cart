import React,{useState} from "react";
import './App.css';
import Header from "./components/header";

function App() {
  const [qty,setQty]=useState(1);
  const [qty2,setQty2]=useState(1);
  const [qty3,setQty3]=useState(1);
  const [qty4,setQty4]=useState(1);
  const [qty5,setQty5]=useState(1);


  const [clss,setClass]=useState("listing");
  const [clss2,setClass2]=useState("listing");
  const [clss3,setClass3]=useState("listing");
  const [clss4,setClass4]=useState("listing");
  const [clss5,setClass5]=useState("listing");



  const handleDelete=()=>{
    setClass("hide");
    setQty(0);
  }

  const handleDelete2=()=>{
    setClass2("hide");
    setQty2(0);
  }

  const handleDelete3=()=>{
    setClass3("hide");
    setQty3(0);
  }


  const handleDelete4=()=>{
    setClass4("hide");
    setQty4(0);
  }


  const handleDelete5=()=>{
    setClass5("hide");
    setQty5(0);
  }





  const inc1=()=>{
    setQty(qty+1)
  }

  const dec1=()=>{

  if(qty>1){
    setQty(qty-1)
  }
  else{
    setClass("hide");
    setQty(0);
  }

  }


  const inc2=()=>{
    setQty2(qty2+1)
  }

  const dec2=()=>{
    if(qty2>1){
      setQty2(qty2-1)
    }
    else{
      setClass2("hide");
      setQty2(0);
    }
  }



  const inc3=()=>{
    setQty3(qty3+1)
  }

  const dec3=()=>{
    if(qty3>1){
      setQty3(qty3-1)
    }
    else{
      setClass3("hide");
      setQty3(0);
    }
  }



  const inc4=()=>{
    setQty4(qty4+1)
  }

  const dec4=()=>{
    if(qty4>1){
      setQty4(qty4-1)
    }
    else{
      setClass4("hide");
      setQty4(0);
    }
  }




  const inc5=()=>{
    setQty5(qty5+1)
  }

  const dec5=()=>{
    if(qty5>1){
      setQty5(qty5-1)
    }
    else{
      setClass5("hide");
      setQty5(0);
    }
  }



  const handleAll=()=>{
    setClass("hide");
    setQty(0);
    setClass2("hide");
    setQty2(0);
    setClass3("hide");
    setQty3(0);
    setClass4("hide");
    setQty4(0);
    setClass5("hide");
    setQty5(0);
  }



  const total=((qty*399)+(qty2*442)+(qty3*743)+(qty4*486)+(qty5*160))

  return (
    <>
  <Header /> 
  <ul class="unlist">
  <li className={clss}>
  <div className="image_container">
      <img src="./images/mob1.png" alt="pic here" />
  </div>
  <div className="list_details">
      <div className="list_name">samsung galaxy m21</div>
      <div className="list_price">$399</div>
      <div className="remove_btn"><button className="delete_btn" onClick={handleDelete}>remove</button></div>
  </div>

  <div className="input_number">
    <div className="num_cont">{qty}</div>
    <div className="arrows_cont">
  <i onClick={inc1} className="fas fa-chevron-up"></i>
  <i onClick={dec1} className="fas fa-chevron-down"></i>
    </div>
  </div>
  </li>

  <li className={clss2}>
  <div className="image_container">
      <img src="./images/mob2.png" alt="pic here" />
  </div>
  <div className="list_details">
      <div className="list_name">Vivo y3 pro</div>
      <div className="list_price">$442</div>
      <div className="remove_btn"><button className="delete_btn" onClick={handleDelete2}>remove</button></div>
  </div>

  <div className="input_number">
    <div className="num_cont">{qty2}</div>
    <div className="arrows_cont">
  <i onClick={inc2} className="fas fa-chevron-up"></i>
  <i onClick={dec2} className="fas fa-chevron-down"></i>
    </div>
  </div>
  </li>


  <li className={clss3}>
  <div className="image_container">
      <img src="./images/mob3.png" alt="pic here" />
  </div>
  <div className="list_details">
      <div className="list_name">Apple iphone 11</div>
      <div className="list_price">$743</div>
      <div className="remove_btn"><button className="delete_btn" onClick={handleDelete3}>remove</button></div>
  </div>

  <div className="input_number">
    <div className="num_cont">{qty3}</div>
    <div className="arrows_cont">
  <i onClick={inc3} className="fas fa-chevron-up"></i>
  <i onClick={dec3} className="fas fa-chevron-down"></i>
    </div>
  </div>
  </li>


  <li className={clss4}>
  <div className="image_container">
      <img src="./images/mob4.png" alt="pic here" />
  </div>
  <div className="list_details">
      <div className="list_name">Motorola G fusion5</div>
      <div className="list_price">$486</div>
      <div className="remove_btn"><button className="delete_btn" onClick={handleDelete4}>remove</button></div>
  </div>

  <div className="input_number">
    <div className="num_cont">{qty4}</div>
    <div className="arrows_cont">
  <i onClick={inc4} className="fas fa-chevron-up"></i>
  <i onClick={dec4} className="fas fa-chevron-down"></i>
    </div>
  </div>
  </li>


  <li className={clss5}>
  <div className="image_container">
      <img src="./images/mob5.png" alt="pic here" />
  </div>
  <div className="list_details">
      <div className="list_name">Redmi note 10</div>
      <div className="list_price">$160</div>
      <div className="remove_btn"><button className="delete_btn" onClick={handleDelete5}>remove</button></div>
  </div>

  <div className="input_number">
    <div className="num_cont">{qty5}</div>
    <div className="arrows_cont">
  <i onClick={inc5} className="fas fa-chevron-up"></i>
  <i onClick={dec5} className="fas fa-chevron-down"></i>
    </div>
  </div>
  </li>
  </ul>

  <div className="total_balance_container">
    
    <div className="total">
      <div className="total_head">Total</div>
      <div className="total_num">${total}</div>
    </div>

<div className="clearAll_btn">

    <button onClick={handleAll} 
    className="clearAll">Clear All</button>
  </div>

</div>

    </>
  );
}

export default App;
