import { Component, Input } from '@angular/core';


@Component({
    selector: 'item',
    styles: [
    `
        :host {
            .item-container {
                position: relative;
            }

            .item-wrapper {
                overflow: hidden;
                position: relative;
                margin-bottom: 8px;
                height: 180px;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
            }
        }
    `
    ],
    template: `
    <div tappable class="item-container">
        <div class="item-wrapper">

                {{ item }}
        </div>
    </div>

    `
})
export class ItemComponent {

    @Input() item: any;
    @Input() showReleaseDate = false;
    @Input() showOnSaleBanner = false;
    @Input() showPosterOnly = false;

    constructor() {

    }

}
