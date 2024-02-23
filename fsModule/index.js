const fs = require('fs');

//employees.json dosyasını eklemek
fs.writeFile('employees.json' , '{ "name " : "Ayse " , "salary " : 3000 } ' , 'utf-8' ,
 (err) => {
    if(err) {
        console.log(err);
        console.log("DOSYA OLUSTURULDU.")
    }
} )

//employees.json dosyasını okuamak

fs.readFile('employees.json' , 'utf-8' , (err,data) => {
    if(err){
        console.log(err);
    }else 
    console.log(data)
    console.log("DOSYA OKUNDU")
})

//employees.json dosyasını güncellemek

fs.appendFile('employees.json', '\n{"name": "Veli" , "salary" : 4000} '  , 'utf-8' , (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data);
   
} )

//employees.json dosyasını silmek
fs.unlink('employees.json' , (err) => {
    if(err) {
        console.log(err);
    }
})





