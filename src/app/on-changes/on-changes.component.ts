import {Component, Input, Output, EventEmitter, SimpleChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html'
})
export class OnChangesComponent implements OnInit {

  @Input() value = '';

  @Output() logger = new EventEmitter<string>();

  logIt(value: string) {
    this.logger.emit(`init OnChangesComponent ${value}`);
  }

  constructor() {
    this.logIt('constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const change = changes[propName];
      const cur = JSON.stringify(change.currentValue);
      const prev = JSON.stringify(change.previousValue);
      this.logIt(`ngOnChange - установка свойств с привязкой ${propName}: previousValue = ${prev}, currentValue = ${cur}`);
    }
  }

  ngOnInit() {
    this.logIt('ngOnInit - вызывается один раз после установки свойств');
  }

  ngDoCheck(): void {
    this.logIt('ngDoCheck - отслеживает изменения');
  }

  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit - вызывается после вставки содержимого в представление');
  }

  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked - вызывается при проверке изменений содержимого');
  }

  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit - вызывается после инициализации представления');
  }

  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked - вызывается после проверки на изменения в представлении');
  }

  ngOnDestroy(): void {
    this.logIt('ngOnDestroy - вызывается перед удалением компонента');
  }
}
