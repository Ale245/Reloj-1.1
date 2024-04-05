function updateClock() {
    const now = new Date();
  
    // Actualizar relojD
    const relojD = document.querySelector('.relojD');
    relojD.textContent = now.toLocaleTimeString();
  
   //Actualizar RelojA
    const segundero = document.querySelector('.segundero');
    const minutero= document.querySelector('.minutero');
    const hora = document.querySelector('.hora');
  
    const segundos = now.getSeconds();
    const minutos = now.getMinutes();
    const horas = now.getHours() % 12;
  
    const segundosDegrees = (segundos / 60) * 360 + 90;
    const minutosDegrees = (minutos / 60) * 360 + 90;
    const horasDegrees = (horas / 12) * 360 + 90 + (minutos / 60) * 30;
  
    segundero.style.transform = `rotate(${segundosDegrees}deg)`;
    minutero.style.transform = `rotate(${minutosDegrees}deg)`;
    hora.style.transform = `rotate(${horasDegrees}deg)`;
  }
  
  updateClock();
  setInterval(updateClock, 1000);