# Decisions

## 2026-07-05

We originally considered organizing Angular by component type.

We switched to feature-based organization because it scales better and keeps related code together.

Tradeoff:
Slightly more folders early.
Much easier to maintain long term.

## 2026-07-19

### Frontend design foundation

- Use global CSS custom properties for shared design tokens.
- Use component-scoped SCSS for feature-specific styling.
- Design mobile-first with visible keyboard-focus states.
- Prefer semantic HTML and accessible interaction patterns.

Tradeoff:
The initial design system remains intentionally small.
New tokens should be added only when multiple components need them.

## 2026-08-02

### Stable Angular snapshots

- Use Vitest snapshots alongside explicit behavioral and accessibility assertions.
- Register one global HTML serializer through the Angular test target instead of normalizing HTML
  separately in each component test.
- Remove Angular-generated attributes, test-host IDs, and framework-version metadata from snapshot
  inputs, and normalize approved dynamic values such as the copyright year.
- Pass rendered HTML elements directly to `toMatchSnapshot()` and keep snapshot files beside their
  component tests.

Tradeoff:
The serializer adds a small shared testing abstraction, but snapshots remain focused on meaningful
rendered markup and avoid failures caused only by test order, Angular compilation identifiers, or
calendar changes.
