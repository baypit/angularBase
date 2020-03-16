import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }
  
  persona:Persona;

  prepararParaGuardar(name: string, apellido: string){
    this.persona = new Persona(name, apellido);
    console.log(name);
    console.log(apellido);
    console.log(this.persona.name);
    console.log(this.persona.apellido);
    this.Guardar(this.persona);
  }

  Guardar(persona:Persona){
    this.service.createPersona(persona).subscribe(data=>{
      alert("Se agrego con exito !!!");
      this.router.navigate(["listar"]);
    })
  }
}
