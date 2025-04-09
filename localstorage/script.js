let data; //Deklarasikan variabel
let daftar_tamu = document.getElementById('daftar_tamu');

//Panggil fungsi tampil
tampil();

function simpan(){
    let nama = document.getElementById('nama').value;
    let keperluan = document.getElementById('keperluan').value;
    let jk = document.getElementById('jk').value;
    console.log(jk);

    //Cek apakah local storage kosong
    if(localStorage.getItem('ls_bukutamu')== null){
        data = [];
    } else {
        //Ambil data dari local storage
        data = JSON.parse(localStorage.getItem('ls_bukutamu'))
    }

    data.push({nama_pengunjung : nama, perlu : keperluan, jk: jk}); //Masukkan value input nama ke array

    localStorage.setItem('ls_bukutamu', JSON.stringify(data)); //Simpan ke local storage

    //Kosongkan isi elemen daftar tamu
    daftar_tamu.innerHTML = '';
    //Panggil fungsi tampil
    tampil();
}

function tampil(){
    localStorage.getItem('ls_bukutamu') == null ? data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu'));

    console.log(data.length); //Tampilkan jumlah data di console

    document.getElementById('total_tamu').innerHTML = `Total Tamu : ${data.length}`;
    
    let total_laki=0;
    let total_perempuan=0;

    data.forEach((item) => {
        if(item.jk == 'L'){
            total_laki++;
        }else if(item.jk == 'P'){
            total_perempuan++;
        }

        daftar_tamu.innerHTML += `<li>
            ${item.nama_pengunjung} - ${item.perlu}
        </li>`
    })
    document.getElementById('tamu_laki').innerHTML = `Total tamu laki-laki : ${total_laki}`;
    document.getElementById('tamu_perempuan').innerHTML = `Total tamu perempuan : ${total_perempuan}`;
}