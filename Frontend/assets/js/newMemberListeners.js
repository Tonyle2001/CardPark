// newmemberListeners.js

export default function setupListeners(view, model) {

    view.form.addEventListener('submit', event => {
    
        event.preventDefault();
        
        const formData = view.readFormData();
        
        model.updateFormData(formData);
        
        model.submitFormData();
        
        view.resetForm();
    });
}
