const range = document.querySelector('input');
const content = document.querySelector('.text')

range.addEventListener('input', function(){
    const rangeValue = range.value;
    content.style.fontSize = rangeValue +"px";
})