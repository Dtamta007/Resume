var btn = document.getElementById('dark');

btn.addEventListener('click', ()=>{

    var side = document.getElementById('side-head');
    side.classList.add('active');

});

var btnClose = document.querySelectorAll('[data-close]');

btnClose.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        var side = document.getElementById('side-head');
        side.classList.remove('active');
    });
});