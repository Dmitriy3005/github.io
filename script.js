function generateBackroundColors() {
    const fonColor = document.body.style.backgroundColor = `#${generate1()}${generate2()}${generate3()}`;

    function generate1 () {
        return Math.ceil(Math.random() * 255).toString(16).toUpperCase();
    }

    function generate2 () {
        return Math.ceil(Math.random() * 255).toString(16).toUpperCase();
    }

    function generate3 () {
        return Math.ceil(Math.random() * 255).toString(16).toUpperCase();
    }
    const fon = document.getElementById("exitBackroundColors")
    fon.innerHTML=`Цвет фона в шестнадцатеричной системе:${fonColor}`;
}