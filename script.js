const app = (() => {
    const _form = document.querySelector('.container__form');
    const _input = document.querySelector('.container__form__input');
    const _errorDisplay = document.querySelector('.container__form__error-msg');
    const _submitButton = document.querySelector('.container__form__buttons__submit');
    const _modal = document.querySelector('.modal');

    const _capitalRe = /[A-Z]/g;
    const _symbolRe = /[`~!@#$%^&\*(\)\/:"';_?.,{}=+]/g;
    const _hyphenRe = /[-]/g;
    const _errorMessage = 'The input must contain 5 capital letters, 6 symbols and 2 hyphens (-)';

    _input.addEventListener('input', (event) => {
        if (validateInput(event.target.value)) {
            hideErrorDisplay();
            enableSubmitButton();
        } else {
            showErrorDisplay();
            updateErrorDisplayContent(_errorMessage);
            disableSubmitButton();
        }
    })

    _form.addEventListener('submit', (event) => {
        event.preventDefault();
        showModal();
    })

    _modal.addEventListener('click', (event) => {
        hideModal();
    })

    function validateInput(text) {
        return (
            validateInputCapitalsCount(text) &&
            validateInputSymbolsCount(text) &&
            validateInputHyphensCount(text)
        );
    }

    function validateInputCapitalsCount(text) {
        return text.match(_capitalRe) && text.match(_capitalRe).length === 5;
    }

    function validateInputSymbolsCount(text) {
        return text.match(_symbolRe) && text.match(_symbolRe).length === 6;
    }

    function validateInputHyphensCount(text) {
        return text.match(_hyphenRe) && text.match(_hyphenRe).length === 2;
    }

    function showErrorDisplay() {
        _errorDisplay.classList.remove('hidden');
    }

    function hideErrorDisplay() {
        _errorDisplay.classList.add('hidden');
    }

    function updateErrorDisplayContent(content) {
        _errorDisplay.textContent = content;
    }

    function disableSubmitButton() {
        _submitButton.disabled = true;
    }

    function enableSubmitButton() {
        _submitButton.disabled = false;
    }

    function showModal() {
        _modal.classList.remove('hidden');
    }

    function hideModal() {
        _modal.classList.add('hidden');
    }

})();