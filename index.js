function teaOrder() {
    d = new Date();
    dateStr = d.toTimeString();
    clock = dateStr.split(' ')[0].split(':')

    var ul = document.createElement("ul");
    var t = document.createTextNode(clock[0] + "." + clock[1]);
    ul.appendChild(t);

    item = document.getElementById("teaTimes")

    if (item.hasChildNodes()) {
        item.lastChild.classList.toggle('strikethroughed')
    }

    document.getElementById("teaTimes").appendChild(ul);
}

function coffeeOrder() {
    d = new Date();
    dateStr = d.toTimeString();
    clock = dateStr.split(' ')[0].split(':')

    var ul = document.createElement("ul");
    var t = document.createTextNode(clock[0] + "." + clock[1]);
    ul.appendChild(t);

    item = document.getElementById("coffeeTimes")

    if (item.hasChildNodes()) {
        item.lastChild.classList.toggle('strikethroughed')
    }

    document.getElementById("coffeeTimes").appendChild(ul);
}

function minuteControl() {
    d = new Date();
    dateStr = d.toTimeString();
    clock = dateStr.split(' ')[0].split(':')

    time = clock[0] + "." + clock[1]
    if (time == 23.59) {
        timeout = calculateRemain()
        document.getElementById("title").innerHTML = timeout
        setTimeout(deleteRecords, timeout)
    }
}

function calculateRemain() {
    d = new Date();
    dateStr = d.toTimeString();
    clock = dateStr.split(' ')[0].split(':')

    start = parseInt(clock[2])
    end = 59
    var result = (end - start) * 1000

    if (result < 0) {
        result = 0
    }

    return result
}

function deleteRecords() {
    tea = document.getElementById("teaTimes")

    while (tea.firstChild) {
        tea.removeChild(tea.firstChild);
    }

    coffee = document.getElementById("coffeeTimes")

    while (coffee.firstChild) {
        coffee.removeChild(coffee.firstChild);
    }
}

minuteInterval = setInterval(minuteControl, 60000);
