// newmemberApp.js
import Model from './newMemberModel.js';
import View from './newMemberView.js';
import setupListeners from './newMemberListeners.js';

class App {

    constructor() {
    
        this.model = new Model();
        
        this.view = new View(this.model);
        
        setupListeners(this.view, this.model);
    }
}

const app = new App();
