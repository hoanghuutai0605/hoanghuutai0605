const soTienVayInput = document.getElementById('money')
const thoiGianVayInput = document.getElementById('time')
const laiSuatInput = document.getElementById('rate')
const calButton = document.getElementById('cal')

var soTienVay = 0;
var thoiGianVay = 0;
var laiSuat = 0;


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

calButton.addEventListener('click',(e) =>{
var gocHangThang = soTienVay/thoiGianVay;
for(let i = 0 ; i <=  thoiGianVay ; i++) {
  var  laiPhaiTra = soTienVay * laiSuat/12;
    let gocConLai = soTienVay - gocHangThang;
    let tienPhaiTraHangThang = laiPhaiTra +  gocHangThang;
    console.log('Tien goc:' + gocConLai + ' Goc:' + gocHangThang + 'Lai:' + laiPhaiTra + ' Goc + Lai: ' + tienPhaiTraHangThang);
  }
} )

