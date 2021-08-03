// Если я правильно понял, нужен аналог функции window.onload

// 1.
document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector('.first-way').innerHTML = 'Document mounted - 1'
});

// 2. 
document.onreadystatechange = function () {
    let state = document.readyState
    if (state == 'complete') {
        document.querySelector('.second-way').innerHTML = 'Document mounted - 2'
    }
}