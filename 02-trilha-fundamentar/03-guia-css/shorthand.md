# Shorthand

* junção de propriedades
* resumido
* legível

```css

{
  /*  background properties */
  background-color: #000;
  background-image: url(images/bg.gif);
  background-repeat: no-repeat;
  background-position: left top;

  /* background shorthands */
  background: #000 url(images/bg.gif) no-repeat left top;


  /* font propeties */
  font-style: italic;
  font-weight: bold;
  font-size: .8em;
  font-height: 1.2;
  font-family: Arial, sans-serif;

  /* font shorthand */
  font: italic bold .8em/1.2 Arial, sans-serif;
}
```
## Detalhes
* não irá considerar propriedades anteriores
* valores não especificados irão assumir o valor padrão
* geralmente a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes, poderemos encontrar problemas


