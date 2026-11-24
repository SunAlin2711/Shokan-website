function deleteNote(noteId) {
    fetch('/delete-note', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
        // Перезагружаем страницу с автоматическим возвратом к секции заметок
        window.location.href = "/#notes-section";
    });
}