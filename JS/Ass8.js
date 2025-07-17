let viewdata = "All Data is Here";
class student {
  constructor(Name, Id) {
    this.Name = Name;
    this.Id = Id;
  }

  studentdata() {
    console.log("data: ", viewdata);
  }
}

class admin extends student {
  // super();
  constructor(name, pass) {
    super();
    this.name = name;
    this.pass = pass; 
  }
  edit() {
    viewdata = " Data Is Changed...";
  }
}

let swapnil = new student("Swapy", 121);
let Nitin = new student("Anna", 120);

let rama = new admin("ramabhau", "admin");
