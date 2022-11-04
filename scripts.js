let cookies = 0;

function updateUI() {
    document.getElementById('cookie-count').innerHTML = cookies
}

document.getElementById('get-cookie').addEventListener('click', ()=>{
    cookies += 1;
    updateUI();
})