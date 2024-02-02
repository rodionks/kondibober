let a = {
    "sname": "Даванков",
    "name": "Олег",
    "mname": "Сергеевич",
    "age": "38",
    "position": "ведущий конструктор",
    "staj": "12",
    "salary": "85000"
}

function worker(a) {
    console.log("фамилия   " + a.sname)
    console.log("имя       " + a.name)
    console.log("отчество  " + a.mname)
    console.log("возраст   " + a.age)
    console.log("должность " + a.position)
    console.log("стаж      " + a.staj)
    console.log("оклад     " + a.salary)
}

worker(a)