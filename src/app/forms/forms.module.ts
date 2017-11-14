import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormListComponent } from './form-list/form-list.component';
import { ActiveComponent } from './shared/active/active.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormEditComponent, FormListComponent, ActiveComponent]
})
export class FormsModule { }
