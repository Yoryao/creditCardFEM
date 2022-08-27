console.log("App working")







function showCardInfo (id) {

    let userValue = document.getElementById(id).value
    document.getElementById(`${id}Info`).innerHTML = userValue.toUpperCase();

    console.log("hello")
}



