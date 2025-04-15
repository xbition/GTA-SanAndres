const fakeErrors = [
  "Ошибка: Файлы системы повреждены!",
  "Внимание: Обнаружен вирус!",
  "Критическая ошибка: Сбой диска C:\\",
  "Ошибка: Доступ к реестру запрещён!",
  "Система перегружена. Перезапуск невозможен!",
  "Неопознанная программа блокирует доступ к файлам.",
  "Ошибка: Недостаточно памяти!",
  "Ошибка: Программа выполнена некорректно!",
  "Ошибка: Внешнее устройство не отвечает!",
  "Критическая ошибка: Потеряна связь с сервером!",
  "Ошибка: Превышен лимит файлов!",
  "Ошибка: Обнаружено постороннее ПО!",
];

document.getElementById('fixButton').addEventListener('click', () => {
  // Показываем несколько "ошибок" одновременно
  for (let i = 0; i < 10; i++) {
    createErrorPopup();
  }
});

function createErrorPopup() {
  const errorText = fakeErrors[Math.floor(Math.random() * fakeErrors.length)];

  const errorPopup = document.createElement('div');
  errorPopup.className = 'error-popup';
  errorPopup.textContent = errorText;

  // Случайное расположение на экране
  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.8;
  errorPopup.style.left = `${x}px`;
  errorPopup.style.top = `${y}px`;

  // Добавляем в контейнер
  document.getElementById('errorsContainer').appendChild(errorPopup);

  // Удаляем элемент после завершения анимации
  setTimeout(() => {
    errorPopup.remove();
  }, 4000);
}