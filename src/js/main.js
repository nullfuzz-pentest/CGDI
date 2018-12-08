const footer = document.getElementById (`footer`);
const autor = (`Gabriel D. Hidalgo`);
const yearcopyright = (moment().format(`YYYY`));
const licenseGPL=(`El contenido está disponible bajo licencia GNU GPLv3.`);
const date1 = document.getElementById(`date1`);
const date2 = document.getElementById(`date2`);
const time1 = document.getElementById(`time1`);
const time2 = document.getElementById(`time2`);
const calcular = document.getElementById(`calcular`);
const diferencia = document.getElementById(`resultado`);
const msgfooter = (`© ${yearcopyright} ${autor} ${licenseGPL}`);

    
    seteo = moment().format(`YYYY-MM-DD`); // setea fecha y formato YYYY-MM-DD
    date1.value = (seteo); // setea valor de fecha actual en value del input id date1
    date2.value = (seteo); // setea valor de fecha actual en value del input id date2
    
    function negativefix(x) {
      if (x < 0) {
        let MsgError = `Ingreso una fecha no valida`;
        return diferencia.value = (MsgError);
      } else {
        return false;
      }
    }
    calcular.onclick = function () {
      var now = (date1.value + ` ` + time1.value + `:00`);
      var then = (date2.value + ` ` + time2.value + `:00`);
      var diff = moment.duration(moment(then).diff(moment(now)));
      var days = parseInt(diff.asDays());
      var hours = parseInt(diff.asHours());
      hours = hours - days * 24;
      var minutes = parseInt(diff.asMinutes());
      minutes = minutes - (days * 24 * 60 + hours * 60);
      var validator = negativefix(diff)
      if (validator == false) {
        if (days <= 0 && hours > 0) {
          let salida = `Duracion del incidente:  ${hours} Hs ${minutes} Min`;
          diferencia.value = (salida);
        } else if (hours <= 0 && days <= 0) {
           let  salida= `Duracion del incidente:  ${minutes} Min`;
           diferencia.value = (salida);
        } else {
          if (days>1){
            let  salida = `Duración del incidente:  ${days} Dias ${hours} Hs  ${minutes} Min`;
            diferencia.value = (salida);
          } else{
              let salida = `Duración del incidente: ${days} Dia ${hours} Hs  ${minutes} Min`;
              diferencia.value = (salida);
          }
        }
      }
    }