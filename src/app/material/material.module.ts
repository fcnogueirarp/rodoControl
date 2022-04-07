import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';

const MaterialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatFormFieldModule,
  MatStepperModule,
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatDividerModule,
  MatProgressBarModule,
  MatSelectModule,
  MatCheckboxModule,
  MatMenuModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
