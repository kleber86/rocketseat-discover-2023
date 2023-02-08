# Cores

Usamos CSS para alterar cores do nosso documento

## Tipos

* background-color(para caixas)
* color (para textos)
* border-color (para caixas)
* outros

## Valores

Podemos definir os valores por

* palavra-chave(blue, transparent)
* hexadecimal
* funções: rgb, rgba, hsl, hsla


```css
element{
  /* Keyword values*/
  color: currentcolor;

  /* <named-color> values */
  color: red;
  color: orange;
  color: tan;

  /* <hex-color> values 0-F */
  color: #090;
  color: #009900;
  color: #090a

  /* hsl() values */
  color: hsl(30, 100%, 50%, 0.6);
  color: hsla(30, 100%, 50%, 0.6);

  /* Global values */
  color: inherit;
  color: initial;
  color: unset;
}
```
