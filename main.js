function cv() {
    const date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let clock = `${hours} : ${minutes} : ${seconds}` 
    let a = document.querySelector('.clock').innerHTML = clock
}
setInterval(cv, 1000)