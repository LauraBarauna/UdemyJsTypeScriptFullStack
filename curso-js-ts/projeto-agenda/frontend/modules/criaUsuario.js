export function ValidarForm (classForm) {
    this.form = classForm;

    this.init = () => {
        this.events();
    }

    this.events = () => {
        if(!this.form) return;

        this.form.addEventListener('submit', e => {
            e.preventDefault();
            alert('FORM NAO ENVIADO')
        })
    }
}