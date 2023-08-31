let nr = 0;

const javaButton = () => {
  if(nr%2==0)
  document.querySelector('.citit-button').innerHTML="Citita";
  else 
  document.querySelector('.citit-buttons ').innerHTML="De Citit";

};

 document.addEventListener('click', ()=>{
  javaButton();
  nr++;
 });

