
function satbanner() {
    let today = new Date();
    console.log(today.getDay())
    if(today.getDay() == 5){
        document.getElementById('bannertext').innerHTML = 
        '<h3>Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.</h3>';
    } else {
    const bannershow = document.getElementById('bannertext');
    {bannershow.classList.add('notfriday')}
    }
}

// function insertbanner() {
//     let today = new Date();
//     console.log(today.getDay())
//     if(today.getDay() == 5){
//         const bannerhide = document.getElementById('bannertext');
//         {bannerhide.classList.remove('notfriday')}
//     } else {
//     const bannershow = document.getElementById('bannertext');
//     {bannershow.classList.add('notfriday')}
//     }
// }