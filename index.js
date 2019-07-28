class Applicative {
  constructor(_v) {
    this.v = _v
  }

  static wrap(_v) {
    return new Applicative(_v)
  }

  fmap(f) {
    return Applicative.wrap(f(this.v))
  }

  hoge(af) {
    return Applicative.wrap(af.get()(this.v))
  }

  get() {
    return this.v
  }
}

const curriedF = x => y => x + y
const wrapedV = Applicative.wrap(1).hoge(curriedF)
console.log(wrapedV)
