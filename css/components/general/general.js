function showPage(page) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    })

    document.querySelector(`#${page}`).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.action').forEach(a => {
        a.onclick = function () {
            showPage(this.dataset.page)
        }
    })


})