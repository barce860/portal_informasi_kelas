document.addEventListener("DOMContentLoaded", function () {
        const selectHari = document.getElementById("filter-hari");
        const rows = document.querySelectorAll(".tabel-jadwal tbody tr");

        const daftarHari = ["MINGGU", "SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU"];
        const hariIni = daftarHari[new Date().getDay()];

        if (selectHari.querySelector(`option[value="${hariIni}"]`)) {
            selectHari.value = hariIni;
            filterJadwal(hariIni);
        }

        selectHari.addEventListener("change", function () {
            filterJadwal(this.value);
        });

        function filterJadwal(hariPilihan) {
            rows.forEach(row => {
                const kolomHari = row.cells[3].textContent.trim().toUpperCase();
                if (hariPilihan === "SEMUA" || kolomHari === hariPilihan) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        }
    });