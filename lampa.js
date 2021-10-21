class Lampa {
  constructor(elem, id) {
    this.elem = elem;
    this.id=id;
    this.allapot = false;
    this.setSzin();
    this.elem.on("click", () => {
      this.fordit();
      this.KattintasTrigger(); 
    });
  }

  fordit(){
    this.allapot = !this.allapot;
    this.setSzin();
  }

  setSzin() {
    if (this.allapot) {
      this.elem.css("background-color", "lightyellow");
    } else {
      this.elem.css("background-color", "lightseagreen");
    }
  }

  KattintasTrigger() {
    let esemeny = new CustomEvent("lampaKattintas", { detail: this });
    window.dispatchEvent(esemeny);
  }

}
