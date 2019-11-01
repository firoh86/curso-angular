import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  forma: FormGroup;

  usuario: any = {
    nombrecompleto: {
      nombre: 'fernando',
      apellido: 'herrera'
    },
    correo: 'fernandoHerrera@gmail.com',
    pasatiempos: ['correr', 'dormir', 'jugar']
  };

  constructor() {
    console.log(this.usuario);
    /*   Los formularios se definen en el constructor como FormGroups que a su vez necesitan de un objeto,
 con ello crearemos la misma estructura dl form html para enlazar los datos */
    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl('', [Validators.required, this.noHerrera])
      }),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$'
        )
      ]),
      pasatiempos: new FormArray([
        new FormControl('correr', Validators.required)
      ]),
      // para validaciones asincronas
      username: new FormControl('', Validators.required, this.existeUsuario),
      // -------------------------------
      password1: new FormControl('', Validators.required),
      password2: new FormControl()
    });
    // Cuando esta funcion se ejecuta está en otro contexto, por eso tenemos que poner bind a noigual, ya que el elemento this de this.forma no existirá dentro de la función de comparación de contraseñas
    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);
    // Evaluar cambios en el valor de un campo del formulario con una promesa
    this.forma.controls['username'].valueChanges.subscribe(data => {
      console.log(data);
    });
    // Evaluar cambios en el status de la petición del campo del formulario con una promesa //PENDING
    this.forma.controls['username'].statusChanges.subscribe(data => {
      console.log(data);
    });

    // para cargar los datos en el formulario lo cargamos con un objeto que ya tiene la misma estructura
    // this.forma.setValue(this.usuario);
  }
  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
  }
  // lo ideal es tener un archivo de validaciones
  noHerrera(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'herrera') {
      return {
        noherrera: true
      };
    }
    return null;
  }
  noIgual(control: FormControl): any {
    console.log(this);
    let forma: any = this;

    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true
      };
    }
    return null;
  }

  // proxeso asincrono
  existeUsuario(control: FormControl): promise<any> | Observable<any> {
    let promesa = new Promise((res, rej) => {
      setTimeout(() => {
        if (control.value === 'strider') {
          res({ existe: true });
        } else {
          res(null);
        }
      }, 3000);
    });
    return promesa;
  }
  guardarCambios() {
    console.log(this.forma);
    // this.forma.reset({
    //   nombrecompleto: {
    //     nombre: '',
    //     apellido: ''
    //   },
    //   correo: ''
    // });
    // this.forma.controls['correo'].setValue('Nuevocorreo@asdasd.com');
  }
}
