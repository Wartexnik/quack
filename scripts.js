let cookies = 0;

function updateUI() {
    document.getElementById('quack-count').innerHTML = cookies
}

document.getElementById('action-quack').addEventListener('click', ()=>{
    cookies += 1;
    updateUI();
})