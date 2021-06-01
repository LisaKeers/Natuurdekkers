import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './details1.css';
import placeholder from "./images/placeholder.png";
import subplaceholder1 from "./images/sub-placeholder1.png";
import subplaceholder2 from "./images/sub-placeholder2.png";
import subplaceholder3 from "./images/sub-placeholder3.png";
import info from "./images/info.png";
import dak1 from "./images/hellend/dak1.png";
import dak2 from "./images/hellend/dak2.png";
import dak3 from "./images/hellend/dak3.png";
import dak4 from "./images/hellend/dak4.png";
import dak5 from "./images/hellend/dak5.png";
import dak6 from "./images/hellend/dak6.png";
import dak7 from "./images/hellend/dak7.png";
import dak8 from "./images/hellend/dak8.png";

function Details1() {
  return (
    <div class="background">
      <div class="safespot">
      <div class="barrier"></div>
    
      {/* <img class="rtl" src={placeholder} alt="placeholder" width="100" height="50"></img> */}
      <a class=" text-2xl text-left underline pl-2" href="/">terug</a>

      <div class="row">

<div class="column2">
    <a href="/Solar"><img src= {subplaceholder3} alt="Mountains" width="40" height="80"></img></a>
  </div>
  <div class="column1">
    <a href="/Hellend"><img src={subplaceholder3}  alt="Forest" width="50" height="100"></img></a>
  </div>
  <div class="column2">
    <a href="/Natuur"><img src= {subplaceholder3} alt="Mountains" width="40" height="80"></img></a>
  </div>
  <div class="column2">
    <a href="/Lichtgewicht"><img src= {subplaceholder3} alt="Mountains" width="40" height="80"></img></a>
  </div>
  <div class="column2">
    <a href="/Economisch"><img src= {subplaceholder3} alt="Mountains" width="40" height="80"></img></a>
  </div>

  </div>
      {/* <div class="row">
        <div class="column3">
          <a class= "arrow right" href="/"></a>
      </div>
        <div class="column2">
          <a href="/"><img src={subplaceholder1}  alt="Snow" width="40" height="80"></img></a>  
        </div>
        <div class="column1">
          <a href="/"><img src={subplaceholder2}  alt="Forest" width="50" height="100"></img></a>
        </div>
        <div class="column2">
          <a href="/"><img src= {subplaceholder3} alt="Mountains" width="40" height="80"></img></a>
        </div>
        <div class="column2">
         <a class= "arrow left" href="/"></a>
       </div>
        </div> */}

<h1 class=" text-left pl-9">Hellend groen dak</h1>



        <div class="break-words w-1/2 bg-gray-200 ml-auto rounded-l-lg inset-y-0 right-0 float-right">
  <h2 class="text-center">descriptie</h2>
  <p class="  p-2">Het hellend groendak is speciaal bedoeld voor schuine daken. Afhankelijk van de hellingsgraad en dakspecificaties zijn er verschillende mogelijkheden voor een hellend groen dak. Om te voorkomen dat het groen van het dak afschuift kunnen er voor erg schuine daken spullen nodig zijn als een anti-afschuifmat, een dak ribbel en/of rasterplaten. Doordat dit dak helt kunnen er op het groendak wel eerder mos of kale plekken ontstaan. Bij dit dak zal het water ook sneller aflopen, waardoor er vaak een dikkere onderlaag nodig is.
  
</p>

 </div>

 <h2 class=" text-left text-green-600 pl-16">technische informatie</h2>
 <div class="tooltip" ><img src={info} alt="placeholder" width="30" height="30"></img><span class="tooltiptext">Gewicht: De draagkracht van het dak moet het gewicht van het groen aankunnen. Het gewicht is het verzadigd gewicht, oftewel het gewicht van het groendak als hij vol water staat.
<br></br><br></br>
Dakhelling: De dakhelling is in hoeveel graden het dak schuin kan zijn voor het groene dak. 
<br></br><br></br>
Plantensoort: Voor verschillende groene daken zijn verschillende soorten planten het meest geschikt. 
<br></br><br></br>
Prijs: De prijs is een schatting voor de aanleg in euro’s per vierkante meter. Dit kan best breed zijn omdat de dak specificaties hier nog invloed op kunnen hebben. Mogelijk kunt u ook subsidie krijgen voor het aanleggen van een groendak, bekijk hier de mogelijkheden in uw omgeving.
<br></br><br></br>
Waterbuffer: Dit is de hoeveelheid water in liter per vierkante meter het dak kan opslaan. Een goede waterbuffer voorkomt wateroverlast en overbelasting van het riool.
</span></div>
 
<ul class=" text-left pl-9 pt-3 divide-y max-w-max">
  <ul class="text-left">gewicht: vanaf 70kg/m2</ul>
  <ul class="text-left">Dakhelling: 5-35°</ul>
  <ul class="text-left">plantensoort: Sedum-Mos</ul>
  <ul class="text-left">Prijs: €40-70 per m2</ul>
  <ul class="text-left">Waterbuffering: 25-35 liter per m2 </ul>
</ul>
     

      
      
      
     
  

    {/* <div class="column4">
    <i class= "arrow right"></i>
    </div> */}
    <div className="text-center m-auto">
    <AliceCarousel autoPlay autoPlayInterval="5000" disableButtonsControls infinite animationDuration="1000" >
     {/* <div class="column5"> */}
      {/* <ul class= "ulr"> */}
  {/* <ul><div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src={placeholder} alt="placeholder" width="300" height="200"></img>
  </a>
</div>
</ul>

<ul><div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src={placeholder} alt="placeholder" width="300" height="200"></img>
  </a>
</div>
</ul>

<ul><div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src={placeholder} alt="placeholder" width="300" height="200"></img>
  </a>
</div>
</ul> */}
{/* "m-auto absolute inset-y-0 right-0 h-auto" */}

{/* <div className>
<img src={placeholder} alt="placeholder" width="1800" height="1200"></img>
{/* <img src={placeholder} alt="placeholder" width="300" height="200" target="_blank" href="img_5terre.jpg"></img>
<img src={placeholder} alt="placeholder" width="300" height="200" target="_blank" href="img_5terre.jpg"></img>
</div> */}
<div>
  <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak1} width="1200" height="800"></img></div>
<div>
  <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak2} width="1200" height="800"></img></div>
<div>
  <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak3} width="1200" height="800"></img></div>
<div>
  <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak4} width="1200" height="800"></img></div>
<div>
  <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak5} width="1200" height="800"></img></div>
<div>
  <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak6} width="1200" height="800"></img></div>
  <div>
  <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak7} width="1200" height="800"></img></div>
  <div>
  <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak8} width="1200" height="800"></img></div>


{/* </ul> */}
{/* </div> */}
</AliceCarousel>
</div>
{/* <div class="column6">
    <i class= "arrow left"></i>
    </div> */}
      {/* <div class= "p-10"><img src={placeholder} alt="placeholder" width="600" height="300"></img></div> */}
      
      </div>
      </div>
    
  );
}

export default Details1;