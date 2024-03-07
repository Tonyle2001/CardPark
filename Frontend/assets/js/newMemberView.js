// newMemberView.js

export default class View {

    constructor(model) {
    
        this.model = model;
        
        this.form = document.querySelector('form');
        
        this.inputs = this.form.querySelectorAll('input[type=fname], input[type=lname], input[type=email] input[type=password], input[type=uid');
    }

    readFormData() {
    
        const data = {};
        
        this.inputs.forEach(input => {
        
            data[input.name] = input.value;
        });
        return data;
    }

    resetForm() {
        this.form.reset();
    }
}

