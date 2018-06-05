import { Component, OnInit, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>()
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>()
  // Use local reference instead of these:
  // newServerName = ''
  newServerContent = ''

  constructor() { }

  ngOnInit() {
  }

  handleAddServer(nameInput: HTMLInputElement) {
    console.log('NAME', nameInput.value);

    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent,
    })
  }

  handleAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent,
    })
  }
}
