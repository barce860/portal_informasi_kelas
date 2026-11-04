const formKontak = document.getElementById('formKontak');

if (formKontak) {
    formKontak.addEventListener('submit', function(event) {
        event.preventDefault();
        const namaInput = document.getElementById('nama').value;
        alert(`Terima kasih, ${namaInput}! Pesan Anda berhasil dikirim.`);
        formKontak.reset();
    });
}