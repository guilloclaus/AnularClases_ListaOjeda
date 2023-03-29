import { Component , OnInit } from '@angular/core';
import { Alumno } from '../src/clases';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Ejercio de listas';

  public alumnos: Alumno[] = [
    new Alumno('Javier', 'Mendoza', 30),
    new Alumno('Daniel', 'Lopez', 30),
    new Alumno('Romina', 'Gomez', 30),
    new Alumno('Monica', 'Peralta', 30),
  ]

  ngOnInit() {
    console.log('Se inicia complemento')
  }

}
