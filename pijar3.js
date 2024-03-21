function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal >= nilaiAkhir) {
        console.log("nilai akhir harus lebih besar dari nilai awal")
        return;
    }

    if (dataArray.length <= 5) {
        console.log("jumlah angka dalam data array harus lebih dari 5");
        return;
    }

    const hasil = dataArray.filter(data => data >= nilaiAwal && data <= nilaiAkhir);

    if (hasil.length === 0) {
        console.log("nilai tidak ditemukan")
        return;
    }

    hasil.sort((a, b) => a - b);

    console.log(hasil);
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, 17, [2, 25, 4])
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])


