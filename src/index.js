import moment from 'moment';
var counter = {
  num:0, 
  increment:function(n){  
    n = typeof n!== 'undefined' ? this.num=this.num+n: this.num=this.num+1; 
  },
  decrement:function(){
    this.num=this.num-1;
  },
  
  reset:function(n){
    //num=n
    if(n){
      this.num=n;
    } else{
      this.num=0;
    }
  },
  getCount:function(){
     return this.num;
  }
 }
 
 const COUNTER_NUM = document.querySelector('.counter-num');
 const MINUS_BTN = document.querySelector('.minus');
 const PLUS_BTN = document.querySelector('.plus');
 const RESET_BTN = document.querySelector('.reset');



 function setNum(){
  COUNTER_NUM.innerHTML=`카운트 횟수 : ${counter.getCount()} / 현재 : ${moment().format('MMMM Do YYYY, h:mm:ss a')}`;
 }


window.onload=function(){
  console.log('oh!!!')
  setNum()
   
   
   MINUS_BTN.addEventListener('click',function(){
     counter.decrement();
     setNum();
   });

   PLUS_BTN.addEventListener('click',function(){
     counter.increment();
     setNum();
   });

   RESET_BTN.addEventListener('click',function(){
     counter.reset();
     setNum();
   })

   
}

