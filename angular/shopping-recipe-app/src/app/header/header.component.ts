import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output('featureLoaded') featureLoaded = new EventEmitter<string>();

  onFeatureSelect(feature: string) {
    this.featureLoaded.emit(feature);
  }
}
