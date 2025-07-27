form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Hindari reload

    const nama = namaInput.value.trim();
    const produk = produkInput.value;

    const namaRegex = /^[A-Za-z\s]+$/;

    if (!nama||!produk) {
        output.innerHTML ='<strong>Semua field wajib diisi</strong>';
        output.style.display = "block";
        return;
    }

    alert(`Pesanan berhasil!\nNama: ${nama}\nProduk: ${produk}`);
});