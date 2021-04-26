import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'esm-triggers',
  templateUrl: './triggers.component.html',
  styleUrls: ['./triggers.component.scss'],
})
export class TriggersComponent implements OnInit {
  choices: any[] = [
    {
      alias: 'daily',
      name: 'Diariamente',
    },
    {
      alias: 'weekly',
      name: 'Semanalmente',
    },
    {
      alias: 'custom',
      name: 'Customizável',
    },
  ];

  form: FormGroup = this.formBuilder.group({
    selectedChoice: this.formBuilder.control(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
