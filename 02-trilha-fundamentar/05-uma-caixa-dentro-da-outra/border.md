## border

As bordas da caixa

- value: `<border-style>` | `<border-witdh>` | `<border-color>`
- style: solid, dotted, dashed, double, groove, ridge, inset, outset
- width: `<length>`
- color: `<color>`

```css

div{
  /* shorthand */
  border-top: 2px solid;

  border: solid;

  border: 2px dotted;

  border: medium dashed green;
}
```

### E outline?

- difere em 4 sentidos:
  - não modifica o tamanho da caixa, pors não é parte do box model
  - poderá ser diferente de retangular
  - não permite ajuste individuais
  - mais usando pelo user agent para acessibilidade
