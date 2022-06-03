# jest-fp-ts-matchers

Collection of monad matchers to ease testing with Jest

## Installation

```bash
npm install -D jest-fp-ts-matchers
```

## Quick start

```typescript
import { expectLeftEither } from 'jest-fp-ts-matchers';

test('throws when parsing fails', () => {
  pipe(
    Parser.parse({ id: '' }),
    expectLeftEither((err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toMatch(/001/);
    })
  );
});
```

## Exported methods

- `expectLeftEither`
- `expectRightEither`
- `expectLeftTaskEither`
- `expectRightTaskEither`
- `expectSomeOption`
- `expectNoneOption`

#### Requirements

- Node.js v.14+

## License

MIT
