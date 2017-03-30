// @flow
export default class Functors {
  static Identity = x => ({
    map: f => Functors.Identity(f(x)),
    fold: f => f(x),
    inspect: () => `Functors.Identity(${x})`,
  });
  static Right = x => ({
    map: f => Functors.Right(f(x)),
    fold: (_, g) => g(x),
    inspect: () => `Functors.Right(${x})`,
  });
  static Left = x => ({
    map: () => Functors.Left(x),
    fold: f => f(x),
    inspect: () => `Functors.Left(${x})`,
  });
  static Sum = x => ({
    x,
    concat: ({ x: y }) =>
      Functors.Sum(x + y),
    inspect: () => `Functors.Sum(${x})`,
  });
  static All = x => ({
    x,
    concat: ({ x: y }) =>
      Functors.All(x && y),
    inspect: () => `Functors.All(${x})`,
  });
  static First = x => ({
    x,
    concat: () =>
      Functors.First(x),
    inspect: () => `Functors.First(${x})`,
  });
}