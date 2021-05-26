export const theme = {
  plain: {
    color: 'rgba(255, 255, 255, 0.95)',
    backgroundColor: 'rgb(29, 29, 35)',
  },
  styles: [
    {
      types: ['prolog'],
      style: {
        color: 'rgb(0, 0, 128)',
      },
    },
    {
      types: ['property'],
      style: {
        color: 'rgb(155, 109, 255)',
      }
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(108, 137, 152)',
      },
    },
    {
      types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'],
      style: {
        color: 'rgb(205, 88, 187)',
      },
    },
    {
      types: ['number', 'inserted'],
      style: {
        color: 'rgb(181, 206, 168)',
      },
    },
    {
      types: ['constant'],
      style: {
        color: 'rgb(100, 102, 149)',
      },
    },
    {
      types: ['attr-name', 'variable'],
      style: {
        color: 'rgb(255, 214, 0)',
      },
    },
    {
      types: ['deleted', 'string', 'attr-value', 'template-punctuation'],
      style: {
        color: 'rgb(155, 109, 255)',
      },
    },
    {
      types: ['selector'],
      style: {
        color: 'rgb(255, 214, 0)',
      },
    },
    {
      // Fix tag color
      types: ['tag'],
      style: {
        color: 'rgb(205, 88, 187)',
      },
    },
    {
      // Fix tag color for HTML
      types: ['tag'],
      languages: ['markup'],
      style: {
        color: 'rgb(205, 88, 187)',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: 'rgb(212, 212, 212)',
      },
    },
    {
      // Fix punctuation color for HTML
      types: ['punctuation'],
      languages: ['markup'],
      style: {
        color: '#808080',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(0, 190, 255)',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'rgb(205, 88, 187)',
      },
    },
    {
      types: ['char'],
      style: {
        color: 'rgb(209, 105, 105)',
      },
    },
  ],
}
