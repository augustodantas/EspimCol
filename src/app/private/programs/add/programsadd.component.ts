import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProgramsAddService } from './programsadd.service';

@Component({
  selector: 'esm-programs-add',
  templateUrl: './programsadd.component.html',
})
export class ProgramsAddComponent {
  constructor(private router: Router, private activeRoute: ActivatedRoute, private programsAddService: ProgramsAddService) {}

  ngOnInit() {
    let id = this.activeRoute.snapshot.params.id;

    if (id) {
      this.programsAddService.fetchData(id);
    } else {
      // TODO descomentar as linhas
      // this.router.navigate(['./first'], {
      //   relativeTo: this.activeRoute,
      // });

      this.programsAddService.clearData();
    }
  }
}
