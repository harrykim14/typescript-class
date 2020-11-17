import {exampleModule} from './module';

var importedModule: exampleModule = {
    name: '예제 모듈',
    moduleFunction : function() {
        console.log(this.name);
    }
}