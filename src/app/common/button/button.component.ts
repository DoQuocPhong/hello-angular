import { EventEmitter, Input, Output } from "@angular/core";
import { Component } from "@angular/core";

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: [
        './button.component.css'
    ]
})
export class ButtonComponent {
    @Input() title: string = 'phong do';

    // @Output() changeTitle = new EventEmitter();

    onChangeTitle(){
        this.title = "Vu Dat";
        //this.changeTitle.emit(this.title)
        this.titleChange.emit(this.title)
    }

    @Output() titleChange = new EventEmitter();


}
