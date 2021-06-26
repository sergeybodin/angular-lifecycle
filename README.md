# angular-lifecycle

Запуск `ng serve`, результат открыть в браузере `http://localhost:4200/`

Результат выполнения после инициализации: 

````
value: 1

#1 init AppComponent function constructor
#2 init AppComponent ngOnInit - вызывается один раз после установки свойств
#3 init AppComponent ngDoCheck - отслеживает изменения
#4 init AppComponent ngAfterContentInit - вызывается после вставки содержимого в представление
#5 init AppComponent ngAfterContentChecked - вызывается при проверке изменений содержимого
#6 init OnChangesComponent ngOnChange - установка свойств с привязкой value: previousValue = undefined, currentValue = 1
#7 init OnChangesComponent ngOnInit - вызывается один раз после установки свойств
#8 init OnChangesComponent ngDoCheck - отслеживает изменения
#9 init OnChangesComponent ngAfterContentInit - вызывается после вставки содержимого в представление
#10 init OnChangesComponent ngAfterContentChecked - вызывается при проверке изменений содержимого
#11 init OnChangesComponent ngAfterViewInit - вызывается после инициализации представления
#12 init OnChangesComponent ngAfterViewChecked - вызывается после проверки на изменения в представлении
#13 init AppComponent ngAfterViewInit - вызывается после инициализации представления
#14 init AppComponent ngAfterViewChecked - вызывается после проверки на изменения в представлении
#15 init AppComponent ngDoCheck - отслеживает изменения
#16 init AppComponent ngAfterContentChecked - вызывается при проверке изменений содержимого
#17 init OnChangesComponent ngDoCheck - отслеживает изменения
````

При нажатии на кнопку `действие` выполняется функция `clickButtonAction()` в ней выполняется:

````
  clickButtonAction(): void {
    this.logInit('function clickButtonAction - выполняется функция clickButtonAction');
    this.value = 0;
    this.disabled = !this.disabled;
  }
````
В данном случае кнопка блокируется на дальнейшее нажатие и переменная value изменяется, тем самым инициализируется изменение в компонентие OnChangeComponent в котором можно увидеть как работает ngOnChange. Стек вызовов функций будет следущим: 
````
value: 0
...
#18 init OnChangesComponent ngAfterContentChecked - вызывается при проверке изменений содержимого
#19 init OnChangesComponent ngAfterViewChecked - вызывается после проверки на изменения в представлении
#20 init AppComponent ngAfterViewChecked - вызывается после проверки на изменения в представлении
#21 init AppComponent function clickButtonAction - выполняется функция clickButtonAction
#22 init AppComponent ngDoCheck - отслеживает изменения
#23 init AppComponent ngAfterContentChecked - вызывается при проверке изменений содержимого
#24 init OnChangesComponent ngOnChange - установка свойств с привязкой value: previousValue = 1, currentValue = 0
#25 init OnChangesComponent ngDoCheck - отслеживает изменения
````
