$(function () {
  //szülöelem és a sablon elem meghatározása
  const szuloElem = $("article");
  const sablonElem = $(".lampa");

  const meret = 36;
  const lampaTomb=[];

  for (let i = 0; i < meret; i++) {
    // A sablonelem klónozása és a szülőelemhez csatolása
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    //pédányosítás
    const lampa = new Lampa(ujElem, i);
    //az objektumokat beletesszük egy tömbbe
    lampaTomb.push(lampa);
  }
  sablonElem.remove();
  //console.log(lampaTomb);

  $(window).on("lampaKattintas", (event) => {
    console.log(event.detail);
    let index=Number(event.detail.id);
    if(index%6 !==0){
      lampaTomb[index-1].fordit();
    }
    if(index%6 !==5){
      lampaTomb[index+1].fordit();
    }
    if(index >= 6){
      lampaTomb[index-6].fordit();
    }
    if(index <= 29){
      lampaTomb[index+6].fordit();
    }
    var szam=0;
    for (let i = 0; i < lampaTomb.length; i++) {
      if(lampaTomb[i].allapot==true){
        szam++;
      }
    }
    if(szam>35){
      szuloElem.empty();
      szuloElem.append("<h1>Nyertél!!!</h1><br><input type='submit' value='NewGame'>");
    }

  });
});
