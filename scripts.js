function showMessage(message) {
    const specialMessage = document.getElementById('special-message');
    specialMessage.textContent = message;
    specialMessage.classList.remove('hidden');
    setTimeout(() => {
        specialMessage.classList.add('hidden');
    }, 3000); // El mensaje desaparece después de 3 segundos
}
