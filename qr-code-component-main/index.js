const link=document.querySelector('#url');
const qrImage=document.querySelector('#qr-img');
const qrbox=document.querySelector('.section1')
function generateQr(){
    qrbox.style.display="flex"
    const input =(link.value);
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
}