module.exports.getName = () => {
    const names = ['Антон', 'Алексей', 'Артём', 'Илья', 'Вадим', "Владимир",
        "Виктор", "Григорий", "Даниил", "Александр", "Павел", "Кирилл"];
    return names[Math.floor(Math.random() * (names.length))];
};

module.exports.getSecondName = () => {
    const names = ["Алексеевич", "Антонович", "Артёмович", "Вадимович", "Ильич",
        "Владимирович", "Даниилович", "Георгиевич", "Александрович", "Павлович", "Кирилович"];
    return names[Math.floor(Math.random() * (names.length))];
};

module.exports.getFullName = () => {
    return this.getName() + " " + this.getSecondName();
};


module.exports.getLastName = () => {
    const names = ["Иванов", "Петров", "Сидоров", "Лебедев", "Попов",
        "Коршунов", "Смирнов", "Кузнецов", "Соколов", "Новиков", "Волков"];
    return names[Math.floor(Math.random() * (names.length))];
}