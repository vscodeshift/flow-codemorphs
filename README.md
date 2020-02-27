# @vscodeshift/flow-codemorphs

[![CircleCI](https://circleci.com/gh/vscodeshift/flow-codemorphs.svg?style=svg)](https://circleci.com/gh/vscodeshift/flow-codemorphs)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscodeshift.flow-codemorphs)](https://marketplace.visualstudio.com/items?itemName=vscodeshift.flow-codemorphs)

general purpose codemods for flow

# Commands

<!-- toc -->

- [make exact](#make-exact)
- [make inexact](#make-inexact)
- [make read-only](#make-read-only)

<!-- tocstop -->

# make exact

Converts object shape types to exact objects.

If you position the cursor inside a type annotation, only objects within that
type annotation are converted.

If there is a selection, only objects within the selection are converted.

## Example

### Before

```ts

// @flow

type Foo = {
  bar: number,
  baz: Array<{
    qux: number,
    blah: $ReadOnly<{
      blsdf: string,
    }>,
    glorb: {a: number}[],
    ...
  }>,
}

```

### After

```ts

// @flow

type Foo = {|
  bar: number,
  baz: Array<{|
    qux: number,
    blah: $ReadOnly<{| blsdf: string |}>,
    glorb: {| a: number |}[],
  |}>,
|}

```

# make inexact

Converts object shape types to inexact objects.

If you position the cursor inside a type annotation, only objects within that
type annotation are converted.

If there is a selection, only objects within the selection are converted.

## Example

### Before

```ts

// @flow

type Foo = {|
  bar: number,
  baz: Array<{
    qux: number,
    blah: $ReadOnly<{|
      blsdf: string,
    |}>,
    glorb: {a: number}[],
    ...
  }>,
|}

```

### After

```ts

// @flow

type Foo = {
  bar: number,
  baz: Array<{
    qux: number,
    blah: $ReadOnly<{ blsdf: string, ... }>,
    glorb: { a: number, ... }[],
    ...
  }>,
  ...
}

```

# make read-only

Converts mutable object shape and array types to readonly types.

If you position the cursor inside a type annotation, only objects
and arrays within that type annotation are converted.

If there is a selection, only objects and arrays within the selection are converted.

## Example

### Before

```ts
// @flow

type Foo = {
  bar: number
  baz: Array<{
    qux: number
    blah: $ReadOnly<{
      blsdf: string
    }>
    glorb: { a: number }[]
  }>
}
```

### After

```ts
// @flow

type Foo = $ReadOnly<{
  bar: number
  baz: $ReadOnlyArray<
    $ReadOnly<{
      qux: number
      blah: $ReadOnly<{
        blsdf: string
      }>
      glorb: $ReadOnlyArray<$ReadOnly<{ a: number }>>
    }>
  >
}>
```
