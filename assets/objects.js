//okjekt představuje prvek reálného světa
//příklad objektu: osoba, počítač, letadlo, budova, soubor
//každý objekt má vlastnosti: např. u osoby (váha, výškam věk, ...)
//objekty mohou vykonávat nějaké činnosti, které nazýváme funkce/metody

//objekt osoba, vlastnosti bez uvozovek : hodnota
let person = {
    firstName : "Patrik",
    lastName : "Pavlíček",
    address : "Machová",
    adult : false,
    bag: ["apple", "cookie", "water", "beer", "bread"]
};

let tractors = {
    brand : "John Deere",
    model : "8R 410",
    from : "USA",
    power : "410 HP",
    color : "green",
    price : "350000$"
}
let persons = [];

//vloží nový objekt do pole
persons.push(person);
persons.push(tractors);

//výběr jednoho elementu na zálkadě selektoru
//projde celý dokument a jakmile najde první shodný element, tak ho uloží do proměné "heading"
let heading = document.querySelector("h1");
heading.innerText = person.firstName + " " + person.lastName;

let paragraph = document.querySelector("p");
paragraph.innerText = person.bag[0];

for (let i = 0; i < person.bag.length; i++) {
    document.write("Výpis pole:" + person.bag[i] + "<br>");
}