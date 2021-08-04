module.exports.getName = () => {
    const names = ['Антон', 'Алексей', 'Артём', 'Вадим', "Владимир", "Виктор", "Григорий", "Даниил", "Александр", "Павел", "Кирилл"]
    return names[Math.floor(Math.random() * (names.length))];
}