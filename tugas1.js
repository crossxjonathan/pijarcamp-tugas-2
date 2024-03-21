/* 1. Metode with() pada instance Array adalah versi penyalinan penggunaan notasi braket untuk 
mengubah nilai indeks tertentu. Ia mengembalikan array baru dengan elemen pada indeks tertentu 
diganti dengan nilai yang diberikan.*/

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.with(2, 6)); 
// console.log(arr); 

// =================================================================================================

/* 2. Metode value() dari instance Array mengembalikan objek iterator array baru yang mengulangi 
nilai setiap item dalam array.*/

// const array1 = ['a', 'b', 'c'];
// const iterator = array1.values();

// for (const value of iterator) {
//   console.log(value);
// }

// =================================================================================================

/* 3. Metode unshift() pada instance Array menambahkan elemen tertentu ke awal array dan 
mengembalikan panjang array yang baru.*/

// const array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));

// console.log(array1);

// =================================================================================================

/* 4. Metode toString() pada instance Array mengembalikan string yang mewakili array 
tertentu dan elemen-elemennya. */

// const array1 = [1, 2, 'a', '1a'];

// console.log(array1.toString());

// =================================================================================================

/* 5. Metode splice() pada instance Array mengubah konten array dengan menghapus atau mengganti elemen yang
ada dan/atau menambahkan elemen baru pada tempatnya.*/

// const months = ["Jan", "Mar", "Apr", "May"];


// const months2 = months.toSpliced(1, 0, "Feb");
// console.log(months2);


// const months3 = months2.toSpliced(2, 2);
// console.log(months3);


// const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
// console.log(months4);

// console.log(months);


// =================================================================================================

/* 6. Metode toSorted() pada instance Array adalah versi penyalinan metode sort(). Ia mengembalikan array 
baru dengan elemen yang diurutkan dalam urutan menaik.*/

// const months = ["Mar", "Jan", "Feb", "Dec"];
// const sortedMonths = months.toSorted();
// console.log(sortedMonths);
// console.log(months);

// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues);
// console.log(values);

// =================================================================================================

/* 7. Metode toLocaleString() pada instance Array mengembalikan string yang mewakili elemen array. Elemen 
dikonversi menjadi string menggunakan metode toLocaleString dan string ini dipisahkan oleh string khusus 
lokal (seperti koma ",").*/

// const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
// const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

// console.log(localeString);

// =================================================================================================

/* 8. Metode splice() pada instance Array mengubah konten array dengan menghapus atau mengganti elemen 
yang ada dan/atau menambahkan elemen baru pada tempatnya.*/

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');

// console.log(months);

// months.splice(4, 1, 'May');

// console.log(months);

// =================================================================================================

/* 9. Metode sort() pada instance Array mengurutkan elemen array pada tempatnya dan mengembalikan referensi 
ke array yang sama, yang sekarang diurutkan. Urutan defaultnya adalah menaik, dibuat dengan mengonversi elemen menjadi string, lalu membandingkan urutan nilai unit kode UTF-16.*/

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);

// =================================================================================================

/* 10. Metode some() pada instance Array menguji apakah setidaknya satu elemen dalam array lolos pengujian 
yang diterapkan oleh fungsi yang disediakan. Ia mengembalikan nilai benar jika, dalam array, ia menemukan 
elemen yang fungsi yang disediakan mengembalikan nilai benar; jika tidak maka akan menghasilkan false. 
Itu tidak mengubah array.*/

// const array = [1, 2, 3, 4, 5];

// const even = (element) => element % 2 === 0;

// console.log(array.some(even));

// =================================================================================================