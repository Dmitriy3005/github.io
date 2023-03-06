function generation () {
    const quot = {
        "Дмитрий Адынец" : '"У меня есть любимая девочка, ее зовут Мария!"',
        "Бусинка" : '"Мария очень ласковая, с ней я становлюсь бусинкой, (это она меня так прозвала)!"',
        "Димитриус" : '"Мария любит, когда я ей глажу по спинке!"',
        "Димуся" : '"Мария очень заботливая и очень вкусно готовит!"',
        "Дмитрий Батькович" : '"Мария любит, когда я дома, а не на работе сутками!"',
        "Дима" : '"Она меня вдохновляет на покорение новых вершин!"',
        "Дмитрий" : '"Моя жизнь очень сильно изменилась, после встречи с ней!"'
    }
    let arrayAuthor = [];
    let arrayQuot = [];
    for (let key in quot) {
        arrayAuthor.push(key);
        arrayQuot.push(quot[key]);
    }
    const quotHTML = document.getElementById('quote');
    const arrayHTML = document.getElementById('author');
    arrayHTML.innerHTML = '';
    quotHTML.innerHTML = '';
    let randomIndex = Math.floor(Math.random() * arrayQuot.length);
    quotHTML.append(arrayQuot[randomIndex]);
    arrayHTML.append(arrayAuthor[randomIndex]);
    console.log(randomIndex);
    //добавили
}
