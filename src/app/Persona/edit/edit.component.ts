import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  personaEdit:Persona=new Persona("1","1");
  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getPersonaId(+id).subscribe(data=>{
      this.personaEdit=data;
      console.log("Persona "+ this.personaEdit.name);
    })
  }

  Actualizar(persona:Persona){
    this.service.updatePersona(persona).subscribe(data=>{
      this.personaEdit = data;
      alert("Se actualizo la persona");
      this.router.navigate(["listar"]);
    }

    )
  }

}
