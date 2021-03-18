document.addEventListener('DOMContentLoaded', function(){
    fetch('/getAccountInfo', {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => addAccountInfo(data['data']))
})
function addAccountInfo(data){
    document.getElementById('id').innerHTML = data[0].user_id
    document.getElementById('user').innerHTML = data[0].user_username
    document.getElementById('pass').innerHTML = data[0].user_password
    document.getElementById('birth').innerHTML = data[0].user_birth
    document.getElementById('phone').innerHTML = data[0].user_phone
}