document.getElementById('biodataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nama = document.getElementById('nama').value;
    var umur = document.getElementById('umur').value;
    var alamat = document.getElementById('alamat').value;
    var nama_kampus = document.getElementById('nama kampus').value;

    var biodata = `
        <p>Nama: ${nama}</p>
        <p>Umur: ${umur}</p>
        <p>Alamat: ${alamat}</p>
        <p>Nama kampus: ${nama_kampus}<p>
    `;


    document.getElementById('biodata').innerHTML = biodata;
});
