import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PaintService } from 'src/app/shared/services/paint-service/paint.service';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent implements OnInit {

  public response: any;
  public submitted = false;
  public image!: any;
  public postForm: FormGroup;
  public loader = false;

  constructor( private paintService: PaintService, public formBuilder: FormBuilder) {
    this.postForm = this.formBuilder.group({
      src: ['', [Validators.required]],
      alt: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
    this.getPaint();
  }
  public getPaint(): void {
    this.loader = true;

    this.paintService.getPaint().subscribe((data) => {
      this.response = data;
      this.loader = false;

    });
  }
  public submitImage(): void {
    this.submitted = true;

    if (this.postForm.valid) {
      this.image = {
        src: this.postForm.get('src')?.value,
        alt: this.postForm.get('alt')?.value,
      };
      this.submitted = false;
      this.postForm.reset();
      this.paintService.postPaint(this.image).subscribe((data) => {
        this.getPaint();
    });
    }
  }
}
