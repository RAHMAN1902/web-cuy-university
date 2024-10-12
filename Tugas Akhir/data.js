function changeContent() {
    const contentParagraph = document.querySelector('.a-content p');
    contentParagraph.textContent = "Terima kasih atas kunjungan anda!!";
}

function showAlert() {
    alert("Terima kasih atas kunjungan anda!!");
}

document.querySelector('.img-content').addEventListener('click', function() {
    changeContent();
});

document.querySelectorAll('.social-media-list a').forEach(link => {
    link.addEventListener('click', showAlert);
});

