module.exports.getName = () => {
    const names = ['Антон', 'Алексей', 'Артём', 'Илья', 'Вадим', "Владимир", "Виктор", "Григорий", "Даниил", "Александр", "Павел", "Кирилл"]
    return names[Math.floor(Math.random() * (names.length))];
}