function getPageBreak() {   
    let start = Math.floor(document.getElementById("home").getBoundingClientRect().y) <= 0 && "start"
    let home = Math.floor(document.getElementById("home").getBoundingClientRect().y) < 0 && "home"
    let about = Math.floor(document.getElementById("about").getBoundingClientRect().y) <= 0 && "about"
    let resume = Math.floor(document.getElementById("resume").getBoundingClientRect().y) <= 0 && "resume"
    let portfolio = Math.floor(document.getElementById("portfolio").getBoundingClientRect().y) <= 0 && "portfolio"
    let interests = Math.floor(document.getElementById("testimonials").getBoundingClientRect().y) <= 0 && "interests"

    let yPositive = interests || resume || about || portfolio || home || start

    switch (yPositive) {
      case "start":
        return {pathname: "#home", background: 'light'}
      case "home":
        return {pathname: "#home", background: 'dark'}
      case "portfolio":
        return {pathname: "#portfolio", background: 'dark'}
      case "about":
        return {pathname: "#about", background: 'dark'}
      case "resume":
        return {pathname: "#resume", background: 'dark'}
      case "interests":
        return {pathname: "#testimonials", background: 'dark'}
    }
}

export default getPageBreak