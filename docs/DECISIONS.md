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
