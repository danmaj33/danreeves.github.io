const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);





const yearoptions = {year:'numeric'};
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', yearoptions);

const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);