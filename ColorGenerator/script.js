//hex colour generator
const hexbtn=document.querySelector('.hex_btn');
const hexColorValue=document.querySelector('.hex_val');
const copyhex=document.querySelector('.copy_hex');
const hex=document.querySelector('.hex');
hexbtn.addEventListener('click',()=>{
    let charset='0123456789ABCDEF';
    let hexColorOutput="";
    


    for (let i=0,charsetLen=charset.length;i<6;++i){
         hexColorOutput+=charset.charAt(
            Math.floor(Math.random()*charsetLen)
        );

    }   

hexColorValue.textContent=`#${hexColorOutput}`;
hexbtn.style.color=`#${hexColorOutput}`;
hex.style.backgroundColor = `#${hexColorOutput}`;

});
      
//rgb color generator

const rgbbtn=document.querySelector('#rgb_btn');
const getRedInputRange=document.querySelector('#red');
const getBlueInputRange=document.querySelector('#blue');
const getGreenInputRange=document.querySelector('#green');
const rgb_cont=document.querySelector('.rgb');
const rgbColorValue=document.querySelector('.rgb_val');
const copyrgb=document.querySelector('#copy_rgb');
let rbgColorOutput="";
rgbbtn.addEventListener('click',()=>

{
    let extractRedVal=getRedInputRange.value;
    let extractBlueVal=getBlueInputRange.value;
    let extractGreenVal=getGreenInputRange.value;
    rgb_cont.style.backgroundColor=`rgb(${extractRedVal},${extractGreenVal},${extractBlueVal})`
    rgbColorValue.textContent=`rgb(${extractRedVal},${extractGreenVal},${extractBlueVal})`;

});
//copy value

function copyHexToClipBoard(){
   navigator.clipboard.writeText(hexColorValue.textContent);
    alert('Hex colour is copied to clipboard!!')

}
copyhex.addEventListener('click',copyHexToClipBoard)

function copyrgbToClipBoard(){

    navigator.clipboard.writeText(rgbColorValue.textContent);
    alert('rgb colour is copied to clipboard!!')
}
copyrgb .addEventListener('click',copyrgbToClipBoard)