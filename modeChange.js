function mion() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    const  navelement1 = document.getElementById("lmnav1");
    const navelement2 =  document.getElementById("lmnav2");
    const  navelement3 =  document.getElementById("lmnav3");
    const navelement4 =  document.getElementById("lmnav4");

    navelement1.classList.toggle("darknav");
    navelement2.classList.toggle("darknav");
    navelement3.classList.toggle("darknav");
    navelement4.classList.toggle("darknav");
     
    const modebtn = document.getElementById("mode");
    modebtn.classList.toggle("moonmode");

    const  hamburgerbtn = document.getElementById("Vector");
    hamburgerbtn.classList.toggle("lightvector");

}