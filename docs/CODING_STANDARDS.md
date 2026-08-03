# Coding Standards

## General

- Small commits
- Feature branches
- Descriptive commit messages

## Angular

- Standalone Components
- Signals preferred
- RxJS only when appropriate
- Smart/Dumb component separation
- Unit tests use Vitest through the Angular test runner
- Use focused snapshots for stable rendered component structure
- Pass rendered `HTMLElement` instances directly to `toMatchSnapshot()`
- Snapshot the smallest meaningful component root or section when possible
- Keep behavioral assertions for links, accessibility, and interactions
- Normalize framework-generated attributes and approved dynamic values only in the global Vitest
  serializer; do not duplicate cleanup in component tests
- Review snapshot diffs before accepting intentional updates

## Java

- Constructor injection
- Immutable DTOs
- Validation first
- Unit tests required

## Naming

Readable over clever.
