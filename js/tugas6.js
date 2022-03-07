let frm = document.getElementById("formulir");
        let validasi1 = document.getElementById("val1")
        let validasi2 = document.getElementById("val2")

        function hitung(nilai) {
            let angka1 = frm.a1.value;
            let angka2 = frm.a2.value;
            let operasi = nilai;
            var isiValidasi = `<div class="form-text text-danger"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>Harap isi data berupa angka</div>`;

            // kondisi jika inputan salah
            var kondisi1 = isNaN(angka1) || angka1 == '' || !/^[0-9]+$/.test(angka1)
            var kondisi2 = isNaN(angka2) || angka2 == '' || !/^[0-9]+$/.test(angka2)
            if (kondisi1 && kondisi2) {
                validasi1.innerHTML = isiValidasi
                validasi2.innerHTML = isiValidasi
            } else if (kondisi1) {
                validasi1.innerHTML = isiValidasi
            } else if (kondisi2) {
                validasi1.innerHTML = ''
                validasi2.innerHTML = isiValidasi
            } else {
                // jika inputan benar
                validasi2.innerHTML = ''
                if (operasi == "+") {
                    let total = parseFloat(angka1) + parseFloat(angka2);
                    frm.hasil.value = total
                } else if (operasi == "-") {
                    let total = angka1 - angka2;
                    frm.hasil.value = total
                } else if (operasi == "x") {
                    let total = angka1 * angka2;
                    frm.hasil.value = total
                } else if (operasi == "/") {
                    let total = angka1 / angka2;
                    frm.hasil.value = total
                } else {
                    let total = Math.pow(angka1, angka2);
                    frm.hasil.value = total
                }
            }
        }

        function batal() {
            let frm = document.getElementById("formulir");
            frm.a1.value = ''
            frm.a2.value = ''
            validasi1.innerHTML = ''
            validasi2.innerHTML = ''
        }