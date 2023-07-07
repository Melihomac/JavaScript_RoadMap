const json = {
    "employees": [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ]
}
console.log(json)

const jsonText = `{
    "browsers": {
      "firefox": {
        "name": "Firefox",
        "pref_url": "about:config",
        "releases": {
          "1": {
            "release_date": "2004-11-09",
            "status": "retired",
            "engine": "Gecko",
            "engine_version": "1.7"
          }
        }
      }
    }
  }`;

console.log(JSON.parse(jsonText));

let myObj = { name: "Chris", age: 38 };
console.log(myObj.name) // Chris
let myString = JSON.stringify(myObj);
console.log(myString.name) // undefined

// JSON array
jsonArray2 = ["apple", "mango", "banana"]
// JSON array containing objects
jsonArray = [
    { "name": "John", "age": 22 },
    { "name": "Peter", "age": 20 },
    { "name": "Mark", "age": 23 }
];

// JSON object
const data = {
    "name": "John",
    "age": 22,
    "hobby": {
        "reading": true,
        "gaming": false,
        "sport": "football"
    },
    "class": ["JavaScript", "HTML", "CSS"]
}

// accessing JSON object
console.log(data.name); // John
console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}
console.log(data.hobby.sport); // football
console.log(data.class[1]); // HTML
console.log(data["name"]); // John

//JSON.stringify objeyi JSON’a çevirir.
//JSON.parse JSON’dan objeye çevirmeye yarar.

let ogrenci = {
    adi: 'Ahmet',
    yasi: 30,
    adminMi: false,
    dersler: ['html', 'css', 'js'],
    esi: null
};

let json2 = JSON.stringify(ogrenci);

console.log(typeof json2); // string dönecektir.!

console.log(json2);
/* JSON'a çevirilmiş obje:
{
"adi": 'Ahmet',
"yasi": 30,
"adminMi": false,
"dersler": ['html', 'css', 'js'],
"esi": null
}
*/

let oda = {
    sayi: 23
};

let tanisma = {
    baslik: "Konferans",
    katilimcilar: ["ahmet", "mehmet"]
};

tanisma.yeri = oda;       // tanisma odaya referans veriyor.
oda.dolduruldu = tanisma; // oda tanismaya referans veriyor

//JSON.stringify(tanisma); // Hata: Dairesel yapı JSON'a çevrilememiştir.

let oda2 = {
    sayi: 23
};
let toplanti = {
    baslik: "Konferans",
    tarih: new Date(Date.UTC(2017, 0, 1)),
    oda2
};
console.log(JSON.stringify(toplanti));
  /*
{
"baslik":"Konferans",
"tarih":"2017-01-01T00:00:00.000Z",  // (1)
"oda": {"sayi":23}               // (2)
}
*/
