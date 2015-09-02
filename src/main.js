import {Componet, View, bootstrap} from 'angular2'

@Componet({
  selector: 'helloworld'
})
@View({
  template: `<h1>Hello World!</h1>`
})
class HelloWorld {

}


bootstrap(HelloWorld)
