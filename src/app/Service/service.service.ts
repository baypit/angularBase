import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url='http://localhost:8081/ejemplo01/personas';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(persona: Persona){
    return this.http.post<Persona>(this.Url,persona);
  }

  getPersonaId(id:number){
    console.log("id "+id)
    return this.http.get<Persona>(this.Url+"/"+id);
  }

  updatePersona(persona:Persona){
    console.log("ipersona "+persona.id);
    console.log("ipersona nombre "+persona.name);
    return this.http.put<Persona>(this.Url+"/"+persona.id, persona);
   
  }

  deletePersona(persona:Persona){
    console.log("ipersona "+persona.id);
    console.log("ipersona nombre "+persona.name);
    return this.http.delete<Persona>(this.Url+"/"+persona.id)
   
  }

}
