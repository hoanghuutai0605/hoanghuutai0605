const soTienVayInput = document.getElementById('money')
const thoiGianVayInput = document.getElementById('time')
const laiSuatInput = document.getElementById('rate')
const calButton = document.getElementById('cal')
const inputNgayGiaiNgan = document.getElementById('date')

var soTienVay = 0;
var thoiGianVay = 0;
var laiSuat = 0;
var ngayGiaiNgan = 0
var date;

soTienVayInput.addEventListener('change',(e)=>{
    soTienVay = e.target.value;
    console.log(soTienVay)
})


thoiGianVayInput.addEventListener('change',(e)=>{
    thoiGianVay = e.target.value;
    console.log(thoiGianVay)
})

laiSuatInput.addEventListener('change',(e)=>{
    laiSuat = e.target.value;
    laiSuat= laiSuat/100;
    console.log(laiSuat)
})
inputNgayGiaiNgan.addEventListener('change',(e)=>{
    ngayGiaiNgan = e.target.value;
    date = new Date(e.target.value);
})

calButton.addEventListener('click',(e) =>{
    var laiPhaiTra = 0;
    var gocConLai = Math.round(soTienVay);
    var tienPhaiTraHangThang = 0;
    var gocHangThang = Math.round(soTienVay/thoiGianVay);


    for (let z = 1; z <= thoiGianVay; z++) {
        laiPhaiTra = Math.round(gocConLai * laiSuat/thoiGianVay);
        tienPhaiTraHangThang = Math.round(laiPhaiTra + gocHangThang);
        gocConLai = Math.round(gocConLai - gocHangThang);
        console.log("Số gốc còn lại = " + gocConLai + " Gốc hàng tháng = " + gocHangThang +" Lãi phải trả = " + laiPhaiTra + ' Tổng gốc + lãi = '+ tienPhaiTraHangThang);


      }
} )

