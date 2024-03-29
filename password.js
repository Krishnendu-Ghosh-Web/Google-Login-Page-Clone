function Toggle() {
    let temp = document.getElementById("typepass");

    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}

function testJS() {

    const greetingValue = localStorage.getItem('greeting');

    var b = document.getElementsByName('name').value

    document.getElementById('here').innerHTML = b;

}
