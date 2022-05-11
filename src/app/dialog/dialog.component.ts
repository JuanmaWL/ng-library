import { ApiService } from './../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  mediaTypeList = ["Película", "Serie", "Videojuego", "Ebook"];
  mediaForm !: FormGroup;
  actionBtn : string = "Guardar";
  constructor(
    private formBuilder : FormBuilder, 
    private api : ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.mediaForm = this.formBuilder.group({
      mediaName : ['', Validators.required],
      mediaType : ['', Validators.required],
      mediaDate : ['', Validators.required]
    });

    //Si se reciben datos, se muestran en el formulario
    if(this.editData){
      this.actionBtn = "Actualizar";
      this.mediaForm.controls['mediaName'].setValue(this.editData.mediaName)
      this.mediaForm.controls['mediaType'].setValue(this.editData.mediaType)
      this.mediaForm.controls['mediaDate'].setValue(this.editData.mediaDate)
    }
  }

  addMedia(){
    //Si no es una edición, se añade desde 0 en el JSON
    if(!this.editData){
      if(this.mediaForm.valid){
        this.api.postMedia(this.mediaForm.value).subscribe({
          next:(res)=>{
            alert("Añadido correctamente");
            this.mediaForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error al añadir multimedia")
          }
        })
      }
    }
    else{
      this.updateMedia();
    }
  }

  updateMedia(){
    this.api.putMedia(this.mediaForm.value, this.editData.id).subscribe({
      next:(res)=>{
        alert("Actualización correcta");
        this.mediaForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error actualizando el registro");
      }
    })
  }

}
