const width=document.querySelector("[id='width']");
const pWidth=document.querySelector("[id='width-value']");
let valueWidth='width:200px';
const heigth=document.querySelector("[id='height']");
const pHeigth=document.querySelector("[id='height-value']");
let valueHeigth='height:200px';
const borderRadius=document.querySelector("[id='border-radius']");
const pBordeRadio=document.querySelector("[id='borde-r-value']");
let valueBordeRadio='border-radius:0%';
const colorBox=document.querySelector("[id='color-box']");
/* const pColor=document.querySelector("[id='borde-r-value']"); */
let valueColor='background-color:#FFFFFF;';
const horizontal=document.querySelector("[id='horizontal']");
const pHorizontal=document.querySelector("[id='horizontal-value']");
let valueHorizontal='0';
const vertical=document.querySelector("[id='vertical']");
const pVertical=document.querySelector("[id='vertical-value']");
let valueVertical='0';
const blurRadius=document.querySelector("[id='blur-radius']");
const pBlurRadius=document.querySelector("[id='blur-radius-value']");
let valueBlurRadius='0';
const spreadRadius=document.querySelector("[id='spread-radius']");
const pSpreadRadius=document.querySelector("[id='spread-radius-value']");
let valueSpreadRadius='0';
const colorBoxShadow=document.querySelector("[id='color-box-shadow']");
let valueColorBoxShadow='#000000';
const box=document.querySelector('.box');
const bnt=document.querySelector("[id='button']");
const win=document.querySelector("[class='ventanita-container']");
const bntOk=document.querySelector("[id='ok']");
const widthCode=document.querySelector("[class='width-code']");
const heightCode=document.querySelector("[class='height-code']")
const borderRadiusCode=document.querySelector("[class='border-radius-code']");
const backgroundColorCode=document.querySelector("[class='background-color-code']");
const boxShadowCode=document.querySelector("[class='box-shadow-code']");



width.addEventListener('input', (e)=>{
  valueWidth=`width:${pWidth.innerHTML=e.target.value}px`;
  box.style.width=`${e.target.value}px`;
  
});

heigth.addEventListener('input', (e) =>{
  valueHeigth=`height:${pHeigth.innerHTML=e.target.value}px`;
  box.style.height=`${e.target.value}px`;
});

borderRadius.addEventListener('input',(e)=>{
  valueBordeRadio=`border-radius:${pBordeRadio.innerHTML=e.target.value}%`;
  box.style.borderRadius=`${e.target.value}%`
});

colorBox.addEventListener('input',(e)=>{
  valueColor=`background-color:${e.target.value}`;
  box.style.backgroundColor=e.target.value;
 
});
horizontal.addEventListener('input',(e)=>{
  valueHorizontal=`${pHorizontal.innerHTML=e.target.value}`;
  box.style.boxShadow=`${valueHorizontal}px ${valueVertical}px ${valueBlurRadius}px ${valueSpreadRadius}px  ${valueColorBoxShadow}`;
});
vertical.addEventListener('input',(e)=>{
  valueVertical=`${pVertical.innerHTML=e.target.value}`;
  box.style.boxShadow=`${valueHorizontal}px ${valueVertical}px ${valueBlurRadius}px ${valueSpreadRadius}px  ${valueColorBoxShadow}`;
  
});
blurRadius.addEventListener('input',(e)=>{
  valueBlurRadius=`${pBlurRadius.innerHTML=e.target.value}`;

  box.style.boxShadow=`${valueHorizontal}px ${valueVertical}px ${valueBlurRadius}px ${valueSpreadRadius}px  ${valueColorBoxShadow}`;
});
spreadRadius.addEventListener('input',(e)=>{
  valueSpreadRadius=`${pSpreadRadius.innerHTML=e.target.value}`;
  box.style.boxShadow=`${valueHorizontal}px ${valueVertical}px ${valueBlurRadius}px ${valueSpreadRadius}px  ${valueColorBoxShadow}`;
});
colorBoxShadow.addEventListener('input',(e)=>{
  valueColorBoxShadow=`${e.target.value}`;
  box.style.boxShadow=`${valueHorizontal}px ${valueVertical}px ${valueBlurRadius}px ${valueSpreadRadius}px  ${valueColorBoxShadow}`;
});
bnt.addEventListener('click',(e)=>{
  win.style.display='flex';
  widthCode.innerHTML=`${valueWidth};`;
  heightCode.innerHTML=`${valueHeigth};`;
  borderRadiusCode.innerHTML=`${valueBordeRadio};`;
  backgroundColorCode.innerHTML=`${valueColor}`
  boxShadowCode.innerHTML=`box-shadow:${valueHorizontal}px ${valueVertical}px ${valueBlurRadius}px ${valueSpreadRadius}px ${valueColorBoxShadow};`;
});

bntOk.addEventListener('click',(e)=>{
  win.style.display='none';
})



