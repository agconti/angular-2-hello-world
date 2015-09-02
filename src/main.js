import {Component, View, bootstrap} from 'angular2/angular2'

@Component({
  selector: 'helloworld'
})
@View({
  template: `<h1>Hello World!</h1>`
})
class HelloWorld {

}


bootstrap(HelloWorld)
