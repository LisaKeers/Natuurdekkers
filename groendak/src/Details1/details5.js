import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './details1.css';

import subplaceholder3 from "./images/sub-placeholder3.png";
import info from "./images/info.png";
import dak1 from "./images/zon/dak1.png";
import dak2 from "./images/zon/dak2.png";
import dak3 from "./images/zon/dak3.png";
import dak4 from "./images/zon/dak4.png";
import ecorow from "./images/ecorow2.png";
import hellendrow from "./images/hellendrow2.png";
import lichtrow from "./images/lichtrow2.png";
import natuurrow from "./images/natuurrow2.png";
import solarrow from "./images/solarrow2.png";

function Details1() {
  return (
    // background
    <div class="background">
      
      <div class="safespot">
      
        <div class="barrier"></div>

        {/* terug knop */}
        <a class=" text-2xl text-left underline pl-6" href="/">terug</a>

        {/* navigation row */}
        <div class="row">

<div class="column1">
<a href="/Solar"><div class="tooltip" ><img src= {solarrow} alt="Solar" width="120" height="180"></img><span class="tooltiptext2">Solar groendak</span></div></a>
</div>


<div class="column2">
  <a href="/Hellend"><div class="tooltip" ><img src= {hellendrow} alt="Hellend" width="80" height="120"></img><span class="tooltiptext2">Hellend groendak</span></div></a>

</div>

<div class="column2">
  <a href="/Natuur"><div class="tooltip" ><img src= {natuurrow} alt="Natuur" width="80" height="120"></img><span class="tooltiptext2">Natuur groendak</span></div></a>

</div>

<div class="column2">
  <a href="/Lichtgewicht"><div class="tooltip" ><img src= {lichtrow} alt="Lichtgewicht" width="80" height="120"></img><span class="tooltiptext2">Lichtgewicht groendak</span></div></a>

</div>

<div class="column2">
  <a href="/Economisch"><div class="tooltip" ><img src= {ecorow} alt="Economisch" width="80" height="120"></img><span class="tooltiptext2">Economish groendak</span></div></a>

</div>

</div>

        {/* descriptie */}
        <h1 class=" text-left pl-9">Solar groen dak</h1>
        <div class="break-words w-1/2 bg-gray-200 ml-auto rounded-l-lg inset-y-0 right-0 float-right">
          <h2 class="text-left pl-4">Beschrijving</h2>
          <p class="  p-4 pt-2">Een solar groendak is de combinatie van zonnepanelen en groen op het dak. Met name op platte daken kan de temperatuur op warme daken wel oplopen tot 70 graden Celcius. Het rendement van zonnepanelen is echter optimaal bij een omgevingstemperatuur rond de 25 graden. Groendaken, voornamelijk met sedumplanten, houden de omgevingstemperatuur lager en daardoor verhoogt het rendement van de zonnepanelen tot wel 8%. </p>
        </div>

        <h2 class=" text-left text-green-600 pl-16">technische informatie</h2>
 
       
        <ul class=" text-left pl-9 pt-3 divide-y max-w-max">
          <ul class="text-left">Gewicht: vanaf 50kg/m²  <div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext">Gewicht: De draagkracht van het dak moet het gewicht van het groen aankunnen. Het gewicht is het verzadigd gewicht, oftewel het gewicht van het groendak als hij vol water staat.</span></div></ul>
          <ul class="text-left">Dakhelling: 0-5°<div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext"> Dakhelling: De dakhelling is in hoeveel graden het dak schuin kan zijn voor het groene dak.</span></div></ul>
          <ul class="text-left">Plantensoort: Sedum-Mos<div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext">Plantensoort: Voor verschillende groene daken zijn verschillende soorten planten het meest geschikt. </span></div></ul>
          <ul class="text-left">Prijs: €25-55 per m²<div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext">Prijs: De prijs is een schatting voor de aanleg in euro’s per vierkante meter. Dit kan best breed zijn omdat de dak specificaties hier nog invloed op kunnen hebben. Mogelijk kunt u ook subsidie krijgen voor het aanleggen van een groendak, bekijk hier de mogelijkheden in uw omgeving.</span></div></ul>
          <ul class="text-left">Waterbuffering: 20-30 liter per m² <div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext">Waterbuffer: Dit is de hoeveelheid water in liter per vierkante meter het dak kan opslaan. Een goede waterbuffer voorkomt wateroverlast en overbelasting van het riool.</span></div></ul>
        </ul>

        {/* foto carousel */}
        <div className="text-center m-auto mt-20 pb-20">
          <AliceCarousel autoPlay autoPlayInterval="5000" disableButtonsControls infinite animationDuration="1000" >    
            <div>
              <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak1} width="1200" height="800"></img>
            </div>

            <div>
              <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak2} width="1200" height="800"></img>
            </div>

            <div>
              <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak3} width="1200" height="800"></img>
            </div>

            <div>
              <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak4} width="1200" height="800"></img>
            </div>
          </AliceCarousel>
        </div>
      <div></div>

      </div>
    </div>
    
  );
}

export default Details1;
