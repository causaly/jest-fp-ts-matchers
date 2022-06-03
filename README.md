# fp-ts-jest-matchers

Collection of monad matchers to ease testing with Jest

## Installation

```bash
npm install -D fp-ts-jest-matchers
```

## Quick start

```typescript
import { expectLeftEither } from 'fp-ts-jest-matchers';

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
