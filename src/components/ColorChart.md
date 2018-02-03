ColorChart's `color` prop takes and array of swatch objects and renders a `Swatch` for each one. At the very minimum each object must include a `color` key.

Each `Swatch` is capable of rendering three different text elements: A `heading`, `label`, and the `value`. Each of those is rendered automatically using the `heading`, `label`, and `color` keys inside the swatch object respectively.

```js
const { Box, Flex } = require('grid-styled');

<Box p={2}>
  <Flex justify="space-around">
    <Box width={1 / 3} p={1}>
      <ColorChart
        colors={[{ label: 'Label', color: '#00796B', heading: 'Heading' }]}
        value={() => 'Value'}
      />
    </Box>
  </Flex>
  <Flex justify="space-around">
    <Box width={1 / 3} p={1}>
      <ColorChart
        colors={[{ label: 'Label', color: '#00796B' }]}
        value={() => 'Value'}
      />
    </Box>
  </Flex>
</Box>;
```

```jsx static
const colors = [
  {
    label: '900',
    color: '#1A237E'
  },
  {
    label: '800',
    color: '#283593'
  },
  {
    heading: 'Teal',
    label: '700',
    color: '#303F9F',
  }
];

<ColorChart colors={colors} />
```

```js
const { Box, Flex } = require('grid-styled');

const materialIndigo = [
  { label: 900, color: '#1A237E' },
  { label: 800, color: '#283593' },
  { label: 700, color: '#303F9F' },
  { label: 600, color: '#3949AB' },
  { label: 500, color: '#3F51B5', heading: 'Indigo' },
  { label: 400, color: '#5C6BC0' },
  { label: 300, color: '#7986CB' },
  { label: 200, color: '#9FA8DA' },
  { label: 100, color: '#C5CAE9' },
  { label: 50, color: '#E8EAF6' }
];

const materialTeal = [
  { label: 900, color: '#004D40' },
  { label: 800, color: '#00695C' },
  { label: 700, color: '#00796B' },
  { label: 600, color: '#00897B' },
  { label: 500, color: '#009688', heading: 'Teal' },
  { label: 400, color: '#26A69A' },
  { label: 300, color: '#4DB6AC' },
  { label: 200, color: '#80CBC4' },
  { label: 100, color: '#B2DFDB' },
  { label: 50, color: '#E0F2F1' }
];

const materialDeepPurple = [
  { label: 900, color: '#311B92' },
  { label: 800, color: '#4527A0' },
  { label: 700, color: '#512DA8' },
  { label: 600, color: '#5E35B1' },
  { label: 500, color: '#673AB7', heading: 'Deep Purple' },
  { label: 400, color: '#7E57C2' },
  { label: 300, color: '#9575CD' },
  { label: 200, color: '#B39DDB' },
  { label: 100, color: '#D1C4E9' },
  { label: 50, color: '#EDE7F6' }
];

<Flex p={2}>
  <Box width={1 / 1} p={1}>
    <ColorChart colors={materialIndigo} label={c => c.label} />
  </Box>
  <Box width={1 / 1} p={1}>
    <ColorChart colors={materialTeal} />
  </Box>
  <Box width={1 / 1} p={1}>
    <ColorChart colors={materialDeepPurple} />
  </Box>
</Flex>;
```

Example using dynamic swatch label and copy color to clipboard on click:

```js
const copy = require('copy-to-clipboard');
const namer = require('color-namer');
const { Box, Flex } = require('grid-styled');

const materialTeal = [
  { label: 900, color: '#004D40' },
  { label: 800, color: '#00695C' },
  { label: 700, color: '#00796B' },
  { label: 600, color: '#00897B' },
  { label: 500, color: '#009688' },
  { label: 400, color: '#26A69A' },
  { label: 300, color: '#4DB6AC' },
  { label: 200, color: '#80CBC4' },
  { label: 100, color: '#B2DFDB' },
  { label: 50, color: '#E0F2F1' }
];

const name = color => {
  return namer(color, { pick: ['ntc'] }).ntc[0].name;
};

<Flex justify="space-around" p={2}>
  <Box width={1 / 3} p={1}>
    <ColorChart
      colors={materialTeal}
      label={s => name(s.color)}
      onClick={s => copy(s.color)}
    />
  </Box>
</Flex>;
```
