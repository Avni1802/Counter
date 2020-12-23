let count = 0;

const counter = document.querySelector('#counter');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('dec')) {
            count--;
        }
        else if (styles.contains('reset')) {
            count = 0;
        }
        else {
            count++;
        }
        if (count > 0) {
            counter.style.color = "green";
        }
        if (count < 0) {
            counter.style.color = "red";
        }
        counter.textContent = count;
    });
});

btns.forEach(function (e) {
    e.addEventListener("click", function (e) {
        console.log(e.currentTarget.classList);
    })
})