// newmemberModel.js
export default class Model {

    constructor() {
    
        this.formData = {};
    }

    updateFormData(data) {
    
        this.formData = { ...this.formData, ...data };
    }

    async submitFormData() {
    
        try {
        
            const response = await fetch('/api/members', {
            
                method: 'POST',
                
                headers: {
                
                    'Content-Type': 'application/json',
                },
                
                body: JSON.stringify(this.formData),
            });

            if (response.ok) {
            
                console.log('Form data submitted successfully');
                
            } else {
            
                console.error('Form submission failed', response.statusText);
            }
        } catch (error) {
        
            console.error('Error submitting form data', error);
        }
    }
}
