import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cruz',
  templateUrl: './cruz.component.html',
  styleUrls: ['./cruz.component.css']
})
export class CruzComponent {

   @Input() value: 'X' | 'O' = "X";
}
