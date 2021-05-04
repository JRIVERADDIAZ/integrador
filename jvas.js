const btn = document.querySelector('.btn') 
const aCotizar = []
let pintador =document.getElementById('costos');

class clente {
    constructor(cost,año,interes){
      this.cost = cost;
      this.año = año; 
      this.interes = interes;
    }
}

btn.addEventListener('click', () => {
   aCotizar.push(new clente( document.getElementById('costo').value,
     document.getElementById('año').value,
    document.getElementById('interes').value
   ))

     aCotizar.forEach( art =>{
        cotizar = () => {
          if (art.cost <= 135000){ 
            let porcentaje = art.interes * .01;
            let costoSeg = art.cost  * porcentaje;
            return costoSeg;
         } else {
             let porcentaje = (12 * .001) * art.cost;
             return porcentaje;
             }  
             
            }
        
          promoAutoViejo = (porcentaje) => {  
      if(art.año <= 2005 && art.año >= 1999){
          
        return porcentaje - 900; 
      } else if (art.año <= 1998 && art.año >= 1993) {
          
          return porcentaje - 1000;
      } else if ( art.año <= 1998 && art.año >= 1993){
          
          return porcentaje - 1000; 
      } else if (art.año <= 1992 && art.año >= 1980){
          
          return porcentaje - 1300;
      } else {
          
          return porcentaje
      }
      
  }      

            console.log(cotizar())
        pintador.innerHTML += `
        Precio del seguro  ${cotizar()} <br>
        Precio con subsidio : ${promoAutoViejo(cotizar())}<br>
       
        `})
    })

    

    
  
 