const btnAdd = document.getElementById("add");
btnAdd.onclick = function (evt) {
  const data = {
    nomor_surat: document.getElementById("nomor_surat").value,
    tanggal: document.getElementById("tanggal").value,
    pengirim: document.getElementById("pengirim").value,
  };

  const xhttp = new XMLHttpRequest();
  xhttp.open(
    "POST",
    "http://localhost/ajax/backend/tambah_proses.php",
    true
  );
  xhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhttp.send(JSON.stringify(data));
  xhttp.onreadystatechange = function () {
     var result = JSON.parse(this.responseText);
     if (result.status == "success") {
       window.location.href = "index.html";
     } else {
       alert("Eror");
     }
   };
   xhttp.onerror = function () {
     alert("Terjadi kesahalan");
   };

  // xhttp.onload = function () {
  //     if (xhttp.status >= 200) {
  //         alert("Successfully add data");
  //     }
  // }

  
  // window.location.href = "index.html";
}