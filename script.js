let name = prompt()

if (name[0].toLowerCase() === "a" || name[0].toLowerCase() === "а") {
    alert("Добро пожаловать")
    let age = prompt("Возраст")
    if(age > 20 && age < 40){
        let money = prompt("Сколько денег")
        if(money >= 100)
        alert("Проходи")
    }
} else {
    alert("Пошёл вон")
}