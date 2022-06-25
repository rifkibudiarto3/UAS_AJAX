let param = window.location.search;
let urlparam = new URLSearchParams(param);
let id = urlparam.get("fid");
console.log(id);
let data = new Object();
data.id = id;
console.log(id);

let jsondata = JSON.stringify(data);
$.post(
    "../backend/get_by_id.php",
    jsondata,
    function (resp) {
        let detail_data = JSON.parse(resp);
        console.log(JSON.parse(resp));
        $("#nomor_surat").val(detail_data.nomor_surat);
        $("#tanggal").val(detail_data.tanggal);
        $("#pengirim").val(detail_data.pengirim);
        
    }
);


$(document).on('click', '#save', function () {
    let dt = new Object();
    dt.id = id;
    dt.nomor_surat = $("#nomor_surat").val();
    dt.tanggal = $("#tanggal").val();
    dt.pengirim = $("#pengirim").val();
    let new_data = JSON.stringify(dt);
    $.post(
        "../backend/update_data.php",
        new_data,
        function (resp) {
            console.log(resp);
            let result = JSON.parse(resp);
            if (result.status === "success") {
              alert("Terjadi perubahan data");
              window.location.href = "index.html";
            } else {
              alert("Eror");
            }
        }
        
    );

});