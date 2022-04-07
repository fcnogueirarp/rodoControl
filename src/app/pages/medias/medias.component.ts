import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.sass'],
})
export class MediasComponent implements OnInit {
  resultado: number = 0;
  mediaForm = new FormGroup({
    km: new FormControl('', Validators.required),
    qde: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}

  showMedia() {
    this.resultado = this.mediaForm.value.km / this.mediaForm.value.qde
  }
}
