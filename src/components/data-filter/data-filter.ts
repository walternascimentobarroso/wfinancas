import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "data-filter",
    templateUrl: "data-filter.html"
})
export class DataFilterComponent {
    @Input() selectMonth;
    @Input() startDate;
    @Output() changeMonth;
    @Output() clickMonth;

    constructor() {
        this.changeMonth = new EventEmitter();
        this.clickMonth = new EventEmitter();
        this.startDate = new Date();
        this.monthSelect(this.startDate);
    }

    executeClickMonth() {
        this.clickMonth.next();
    }

    executeChangeMonth() {
        this.changeMonth.next(this.startDate);
    }

    monthSelect(date) {
        this.selectMonth = date;
        this.selectMonth = this.currentDateFormatted(date);
        this.executeChangeMonth();
    }

    previousMonth() {
        let newdate = new Date(
            this.startDate.setMonth(this.startDate.getMonth() - 1)
        );
        this.monthSelect(newdate);
    }

    nextMonth() {
        let newdate = new Date(
            this.startDate.setMonth(this.startDate.getMonth() + 1)
        );
        this.monthSelect(newdate);
    }

    currentDateFormatted(date) {
        let options: any = { year: "numeric", month: "long" };
        let stringDate = date.toLocaleDateString("pt-BR", options);
        return stringDate.charAt(0).toUpperCase() + stringDate.slice(1);
    }
}
