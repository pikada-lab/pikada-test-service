/**
 * Список имён которые будут использоваться
 */
module.exports.NAME = ['Антон', 'Алексей', 'Артём', 'Илья', 'Вадим', "Владимир",
    "Виктор", "Григорий", "Даниил", "Александр", "Павел", "Кирилл"];

/**
 * Список отчеств
 */
module.exports.SECOND_NAME = ["Алексеевич", "Антонович", "Артёмович", "Вадимович", "Ильич",
    "Владимирович", "Даниилович", "Георгиевич", "Александрович", "Павлович", "Кирилович"];

/**
 * Список фамилий
 */
module.exports.LAST_NAME = ["Иванов", "Петров", "Сидоров", "Лебедев", "Попов",
    "Коршунов", "Смирнов", "Кузнецов", "Соколов", "Новиков", "Волков"];

/**
 * Возвращает элемент из массива случайным образом
 * @param {*} arr 
 * @returns значение
 */
const random = (arr) => {
    return arr[Math.floor(Math.random() * (arr.length))];
};

/**
 * Возвращает случайное имя
 * @returns string
 */
module.exports.getName = () => {
    return random(this.NAME);
};

/**
 *  Возвращает случайное отчество
 * @returns string
 */
module.exports.getSecondName = () => {
    return random(this.SECOND_NAME);
};

/**
 *  Возвращает случайную фамилию
 * @returns string
 */
module.exports.getLastName = () => {
    return random(this.LAST_NAME);
};

module.exports.getFullName = () => {
    return this.getName() + " " + this.getSecondName();
};

module.exports.getFIO = () => {
    return this.getLastName() + " " + this.getFullName();
};