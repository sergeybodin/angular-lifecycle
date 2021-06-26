import {Component, OnInit, SimpleChanges} from '@angular/core';

let nextId = 1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  stacks: any = [];

  value: any = 1;

  disabled = false;

  logIt(value: string): void {
    const newKey = this.stacks.length;
    this.stacks[newKey] = `#${nextId++} ${value}`;
  }

  logInit(name: string): void {
    this.logIt(`init AppComponent ${name}`);
  }

  constructor() {
    this.logInit('function constructor');
  }

  ngOnInit(): void {
    this.logInit('ngOnInit - вызывается один раз после установки свойств');
  }

  ngDoCheck(): void {
    this.logInit('ngDoCheck - отслеживает изменения');
  }

  ngAfterContentInit(): void {
    this.logInit('ngAfterContentInit - вызывается после вставки содержимого в представление');
  }

  ngAfterContentChecked(): void {
    this.logInit('ngAfterContentChecked - вызывается при проверке изменений содержимого');
  }

  ngAfterViewInit(): void {
    this.logInit('ngAfterViewInit - вызывается после инициализации представления');
  }

  ngAfterViewChecked(): void {
    this.logInit('ngAfterViewChecked - вызывается после проверки на изменения в представлении');
  }

  ngOnDestroy(): void {
    this.logInit('ngOnDestroy - вызывается перед удалением компонента');
  }

  clickButtonAction(): void {
    this.logInit('function clickButtonAction - выполняется функция clickButtonAction');
    this.value = 0;
    this.disabled = !this.disabled;
  }
}
