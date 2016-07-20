
var aviz = document.getElementById("avizier");
var afisaj = document.getElementById("btext");
var thenum; var oldnum; var cazul; var rez; var t = 0; var tt = 0;

  function cifra(el) {                   // la apasarea unei cifre { 0 1 2 3 4 5 6 7 8 9}
    afisaj.value += el.innerHTML;         // pe ecran (textbox) va afisa textul din butoane ( adica numerele butoanelor)
    thenum = parseFloat(afisaj.value);    // variabla "thenum" va stoca numarul transformat din string al textului
    t++;                         // var t = timpul;
    aviz.innerHTML += el.innerHTML;    // aviz-ul va avisa in avizier ( paragraful de sub calculator = avizier)
  }

  function sum(el) {            // functia va fi apelata la apasarea tastei "+"
    afisaj.value = "";          // ecranul nu ma afisa nimica
    oldnum = thenum;           // in variabila oldnum se va stoca valoarea tastei apasate ( thenum )
    cazul = 1;                  // apelarea functiei sum() vom considera cazul 1
    aviz.innerHTML += " " + "+" + " ";  // avizier

  }

  function minus(el){            // daca timpul e 0, adica nu a fost apasat niciun buton,
    if (t==0){                        // atunci semnul minus si numerele alese de noi se vor tranforma din text in float
      afisaj.value = "-";
      thenum = parseFloat(afisaj.value);
      aviz.innerHTML = "-";
    }
    else {
      afisaj.value = "-";       // textl v-a afisa semnul " - " ( minus )
      oldnum = thenum;           // in variabila oldnum se va stoca valoarea tastei apasate ( thenum )
      aviz.innerHTML += " " + "-" + " ";  //  avizier
      cazul = 2;                // apelarea functiei minus() cand t!=0  vom considera cazul 2
    }
  }

  function divide(el){
    afisaj.value = "";
    oldnum = thenum;              // in variabila oldnum se va stoca valoarea tastei apasate ( thenum )
    cazul = 3;                     // apelarea functiei divide() vom considera cazul 3
    aviz.innerHTML += " " + "/" + " ";   // avizier
  }

  function mul(el){
    afisaj.value = "";
    oldnum = thenum;             // in variabila oldnum se va stoca valoarea tastei apasate ( thenum )
    cazul = 4;                    // apelarea functiei mul() vom considera cazul 4
    aviz.innerHTML += " " + "*" + " ";   // avizier
  }

  function dot(el){
    afisaj.value += ".";    // pune semnul "punct" dupa strngul introdus de noi ( adica numere in cazu nostru ) si il tranformam in float
    thenum = parseFloat(afisaj.value);           // pentru ca limbajul sa-l considere numar ca sa putem face calcule cu el
    aviz.innerHTML += ".";   // avizier
  }

  function eq(el) {
    if (cazul==1){
      rez = oldnum + thenum;      // apelarea cazului 1 adica adunare ( functia sum() )
    }
    if (cazul==2){
      rez = oldnum + thenum;      // apelarea cazului 2 adica adunare ( functia minus() )
    }
    if (cazul==3){
      rez = oldnum / thenum;      // apelarea cazului 3 adica adunare ( functia divide() )
    }
    if (cazul==4){
      rez = oldnum * thenum;      // apelarea cazului 4 adica adunare ( functia mul() )
    }
    afisaj.value = rez;           // se va afisa rezultatul in textbox ( ecran )
    aviz.innerHTML += " " + "=" + " " + rez;   // avizier
    thenum = rez;                  // variavbila thenum va lua valoarea rezultatului pt a putea continua calculele
  }

  function cl(el) {     // functia e apelata la apasarea butonului C a tastaturii
    thenum = "";      // thenum va fi nul
    oldnum = "";      // oldnum va fi nul
    afisaj.value = "";   // ecranul se va goli
    aviz.innerHTML = "";   // avizierul se va goli
  }

  $(window).load(function(){
      $(".ciomos").fadeIn('slow');
  });

  $(document).ready(function(){
    $(".ciomos").mouseover(function(){
        $(".ciomos").animate({left: '+=20px', top: '+=20px'}, 50)
    });
});


  $(document).ready(function(){
    $(".ciomos").mouseover(function(){
      $(".ciomos").css("background-color", "#FD1300");
      $("p").append(" <b>Trololololoool lololol lolol</b>.");
      $('body').removeClass('monster').addClass('monster2');
    })
    $(".ciomos").mouseleave(function(){
      $(".ciomos").css("background-color", "#0064FD");
      $(".monster2").append("<img src='http://media.mercola.com/assets/images/food-facts/banana-fb.jpg' width = '150px' height = '150px'>")
    })
  })

  $(document).ready(function(){
    $("body").dblclick(function(){
      $(".ciomos").animate({left: '10px', top: '10px'});
      $("p").hide();
      $('body').removeClass('monster2').addClass('monster');
      $("img").hide();

    })
  })
