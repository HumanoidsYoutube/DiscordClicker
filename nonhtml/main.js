var upc = 1;
var ups = 0;
var users = 0;
var costs = [15, 50];
var gains = [1, 2.5];

console.log('A cheated user never interacts...');

setInterval(function(){
    users = users + ups;
    if(ups > 0) {
        var img = document.createElement('img');
        img.src = 'images/newuser.png'
        img.style = 'width: 50px; height: 50px; position: fixed; top: ' +   Math.floor(Math.random() * 300) + '; left: 0; transition: 1s; border-radius: 100%;'
        document.body.appendChild(img)
        setTimeout(function(){
            img.style.left = '100%';
        },20)
        setTimeout(function() {
            img.remove()
        }, 1020)
    }
    document.getElementById('usercount').innerHTML = 'Members: ' + users
    document.getElementById('userspersec').innerHTML = 'Members Per Second: ' + ups
}, 1000)

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
function shop(shopid) {
    if(costs[shopid] > users) {
        document.getElementById('shop' + shopid + 'cost').innerHTML = 'Not Enough Members!'
        document.getElementById('shop' + shopid + 'cost').style.color = 'red'
        document.getElementById('shop' + shopid).style.backgroundColor = '#ffd5ad'
        setTimeout(function(){
            document.getElementById('shop' + shopid + 'cost').innerHTML = 'Cost: ' + costs[shopid] +' members'
            document.getElementById('shop' + shopid + 'cost').style.color = 'black'
            document.getElementById('shop' + shopid).style.backgroundColor = 'azure'
        }, 1500)
        return;
    }
    users = users - costs[shopid]
    costs[shopid] = Math.floor(costs[shopid] * 1.15)
    ups = ups + gains[shopid]
    document.getElementById('shop' + shopid + 'cost').innerHTML = 'Cost: ' + costs[shopid] +' members'
    document.getElementById('userspersec').innerHTML = 'Members Per Second: ' + ups
    document.getElementById('usercount').innerHTML = 'Members: ' + users
    document.getElementById('shop' + shopid).style.backgroundColor = '#15ff00'
    setTimeout(function(){
        document.getElementById('shop' + shopid).style.backgroundColor = 'azure'
    }, 1500)
    var img = document.createElement('img');
    img.src = 'images/redavatar.png'
    img.style = 'width: 75px; height: 75px; position: fixed; top: ' + Math.floor(Math.random() * 300) + '; left: 0; transition: 1s; border-radius: 100%;'
    document.body.appendChild(img)
    setTimeout(function(){
        img.style.left = '100%';
    },20)
    setTimeout(function() {
        img.remove()
    }, 1020)
}