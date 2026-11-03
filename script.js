const noteInput = document.getElementById('note-input');
const submitButton = document.getElementById('submit-button');

// Отслеживаем ввод текста для активации кнопки
noteInput.addEventListener('input', () => {
    if (noteInput.value.trim().length > 0) {
        submitButton.classList.add('ready');
    } else {
        submitButton.classList.remove('ready');
    }
});

// Логика нажатия на "Отправить"
submitButton.addEventListener('click', () => {
    if (noteInput.value.trim().length > 0) {
        alert('Заметка сохранена: ' + noteInput.value);
        noteInput.value = '';
        submitButton.classList.remove('ready');
    }
});
