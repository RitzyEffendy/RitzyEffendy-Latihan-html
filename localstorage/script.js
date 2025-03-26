let data; //Deklarasikan variabel
let daftar_tamu = document.getElementById('daftar_tamu');

//Panggil fungsi tampil
tampil();

function simpan(){
    let nama = document.getElementById('nama').value;
    let keperluan = document.getElementById('keperluan').value;
    console.log(nama);

    //Cek apakah local storage kosong
    if(localStorage.getItem('ls_bukutamu')== null){
        data = [];
    } else {
        //Ambil data dari local storage
        data = JSON.parse(localStorage.getItem('ls_bukutamu'))
    }

    data.push({nama_pengunjung : nama, perlu : keperluan}); //Masukkan value input nama ke array

    localStorage.setItem('ls_bukutamu', JSON.stringify(data)); //Simpan ke local storage

    //Kosongkan isi elemen daftar tamu
    daftar_tamu.innerHTML = '';
    //Panggil fungsi tampil
    tampil();
}

function tampil(){
    localStorage.getItem('ls_bukutamu') == null ? data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu'));

    data.forEach((item) => {
        daftar_tamu.innerHTML += `<li>
            ${item.nama_pengunjung} - ${item.perlu}
        </li>`
    })
}