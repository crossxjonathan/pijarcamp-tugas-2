const names = ["Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]
 

const searchNama = (nama,callback,limit) => {
    const cari = names.filter(n => n.toLowerCase().includes(nama.toLowerCase())).slice(0,limit);

    callback(cari)
};

const hasilCallback = (hasil) => {
    if(hasil.length > 0){
        console.log("Hasil pencarian :", hasil)
    }else{
        console.log("Pencarian tidak tersedia!!")
    }
};

searchNama("an", hasilCallback, 3)