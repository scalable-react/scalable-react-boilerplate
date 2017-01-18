# Change Log

## 1.0.6
- Flow static type-checking

## 1.0.5
- SSR improvements

## 1.0.4
Styled components were added as an option to containers and components when generated

## 1.0.3
- Code chunking will now place react, react-dom and grommet-udacity into the vendor file.
- Use System.imports to load up modules via React Router, which facilitates Tree-Shaking

## 1.0.2
- Add an option to use reselect when generating a container.

## 1.0.1

- This release includes a new generator for containers that creates a graphql / apollo query and mutation if the option is selected.
- By selecting the graphql option when running the container generator, the user will be prompted about adding graphql queries / mutations.
- Pages now have a generator to import a Container by the same name
- The comments that are required for successful code generation new are prefixed with `Generator`.

## 1.0.0

### Beta Release

- Serverside rendering
  - Update page and container generators
  - Update routes to use object syntax for lazy loading
- Apollo Client
- New Demo App
  - Add reusable components
- Lazy Route Loading
- Update Grommet-Udacity to v0.1.12
- Update Webpack to v2.1.19-beta
