const displayTime = () =>{
    //Se definen variables para determinar el tiempo y se crea un objeto
    let date = new Date;
    let hora = date.getHours();
    let minuto = date.getMinutes();
    let segundo = date.getSeconds();
    let dia = date.getDate();
    let mes = date.getMonth();
    let anio = date.getFullYear();
    let meridiano = '';
    let fechaCompleta = new Date().toDateString();
    //console.log(fechaCompleta);
    //Se define meridiano
    hora < 12 ? meridiano = 'AM' : meridiano = 'PM';
    if(hora > 12){
        hora -= 12;
    }
    let padHora = String(hora).padStart(2, '0');
    let padMin = String(minuto).padStart(2, '0');
    let padSeg = String(segundo).padStart(2, '0');
    //Hora al HTML, no se declara variable debido al textContento
    //time.textContent = `${padHora}:${padMin}${meridiano}`;
    horaReloj.textContent = `${padHora} :`;
    minutoReloj.textContent = `${padMin}`;
    meridianoReloj.textContent = `${meridiano}`;
    segundoReloj.textContent = `${padSeg}`;
    fechaReloj.textContent = `${fechaCompleta}`;
    requestAnimationFrame(displayTime);
}
displayTime();