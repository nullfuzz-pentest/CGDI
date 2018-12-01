    var date1 = document.getElementById('date1')
    var date2 = document.getElementById('date2')
    var time1 = document.getElementById('time1')
    var time2 = document.getElementById('time2')
    var calcular = document.getElementById('calcular')
    var diferencia = document.getElementById('resultado')
    var seteo = moment().format('YYYY-MM-DD'); // setea fecha y formato YYYY-MM-DD
    date1.value = seteo // setea valor de fecha actual en value del input id date1
    date2.value = seteo // setea valor de fecha actual en value del input id date2

    function negativefix(x) {
      if (x < 0) {
        return diferencia.value = ('Ingreso una fecha de inicio no valida')
      } else {
        return false
      }
    }
    calcular.onclick = function () {
      var now = (date1.value + ' ' + time1.value + ':00');
      var then = (date2.value + ' ' + time2.value + ':00');
      var diff = moment.duration(moment(then).diff(moment(now)));
      var days = parseInt(diff.asDays());
      var hours = parseInt(diff.asHours());
      hours = hours - days * 24;
      var minutes = parseInt(diff.asMinutes());
      minutes = minutes - (days * 24 * 60 + hours * 60);
      var validator = negativefix(diff)
      if (validator == false) {
        if (days <= 0 && hours > 0) {
          diferencia.value = ('Duracion del incidente: ' + hours + ' Hs ' + minutes + ' Min')
        } else if (hours <= 0 && days <= 0) {
          diferencia.value = ('Duracion del incidente: ' + minutes + ' Min')
        } else {
          if (days>1){
            diferencia.value = ('Duración del incidente: ' + days + ' Dias ' + hours + ' Hs ' + minutes + ' Min')
          } else{
            diferencia.value = ('Duración del incidente: ' + days + ' Dia ' + hours + ' Hs ' + minutes + ' Min')
          }
        }
      }
    }