document.addEventListener("DOMContentLoaded", function() {
            const namaHari = ["MINGGU", "SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU"];
            
            const tanggalHariIni = new Date();
            const indexHari = tanggalHariIni.getDay();
            const hariIni = namaHari[indexHari];

            const elemenHari = document.getElementById("nama-hari-ini");
            if (elemenHari) {
                elemenHari.textContent = hariIni;
            }

            const barisJadwal = document.querySelectorAll(".tabel-jadwal tbody tr");
            let adaJadwal = false;
            
            barisJadwal.forEach(baris => {
                const kolomHari = baris.cells[3]; 
                
                if (kolomHari) {
                    const hariBaris = kolomHari.textContent.trim().toUpperCase();
                    
                    if (hariBaris === hariIni) {
                        baris.style.display = ""; 
                        adaJadwal = true;
                    } else {
                        baris.style.display = "none"; 
                    }
                }
            });

            if (!adaJadwal) {
                const tbody = document.querySelector(".tabel-jadwal tbody");
                const trKosong = document.createElement("tr");
                trKosong.innerHTML = `<td colspan="7" style="text-align: center; padding: 25px; color: #777; font-style: italic;">Tidak ada jadwal kuliah untuk hari ini. 🎉</td>`;
                tbody.appendChild(trKosong);
            }
        });