/*btn*/
document.addEventListener('DOMContentLoaded',()=>{

    const imgHero=document.querySelector('.hero');

    let i=0;
    let tiempo=0

    const imagenes=['arriba2.webp','arriba.webp'];

    setInterval(() => {
        imgHero.style.backgroundPositionY='-'+tiempo+'px';

        if(tiempo>40){
            tiempo=0;
            imgHero.style.backgroundImage='url(../img/'+imagenes[i]+')';
            
            if(i===imagenes.length - 1){
                i=0;
            }
            else{
                i++
            }
        }
        tiempo++;

    }, 100);


    const btnFlotante=document.querySelector('.btn-flotante');
    btnFlotante.addEventListener('click',(e)=>{
        e.preventDefault();

        const footer=document.querySelector('.footer');

        if(footer.classList.contains('activo')){
            footer.classList.remove('activo');
            btnFlotante.innerHTML="Idioma y Moneda";
            btnFlotante.classList.remove('activo');
        }else{
            footer.classList.add('activo');
            btnFlotante.innerText="X Cerrar";
            btnFlotante.classList.add('activo');

        };
    });

});
