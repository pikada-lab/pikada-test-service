/**
 * Список имён которые будут использоваться
 */
module.exports.NAME = ['Антон', 'Алексей', 'Артём', 'Илья', 'Вадим', "Владимир",
    "Виктор", "Григорий", "Даниил", "Александр", "Павел", "Кирилл"];

module.exports.SECOND_NAME = ["Алексеевич", "Антонович", "Артёмович", "Вадимович", "Ильич",
    "Владимирович", "Даниилович", "Георгиевич", "Александрович", "Павлович", "Кирилович"];

module.exports.LAST_NAME = ["Иванов", "Петров", "Сидоров", "Лебедев", "Попов",
    "Коршунов", "Смирнов", "Кузнецов", "Соколов", "Новиков", "Волков"];

const random = (arr) => {
    return arr[Math.floor(Math.random() * (arr.length))];
};

module.exports.getName = () => {
    return random(this.NAME);
};

module.exports.getSecondName = () => {
    return random(this.SECOND_NAME);
};

module.exports.getLastName = () => {
    return random(this.LAST_NAME);
};

module.exports.getFullName = () => {
    return this.getName() + " " + this.getSecondName();
};

module.exports.getFIO = () => {
    return this.getLastName() + " " + this.getFullName();
};