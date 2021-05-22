var upc = 1;
var ups = 0;
var users = 0;
console.log('A cheated user never interacts...');
function runclick() {
    users++;
    console.log('+' + upc + ' users - total ' + users)
    var img = document.createElement('img');
    img.src = 'images/newuser.png'
    img.style = 'width: 50px; height: 50px; position: fixed; top: ' + Math.floor(Math.random() * 300) + '; left: 0; transition: 1s; border-radius: 100%;'
    document.body.appendChild(img)
    setTimeout(function(){
        img.style.left = '100%';
    },20)
    setTimeout(function() {
        img.remove()
    }, 1020)
    document.getElementById('usercount').innerHTML = 'Members: ' + users
    document.getElementById('userspersec').innerHTML = 'Members Per Second: ' + ups
}