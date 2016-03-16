import parse from 'co-body';

export default function (layer) {
  return function *expose() {
    try {
      const query = yield parse.json(this);
      const res = yield layer.fulfill(query);
      this.body = res;
    } catch (err) {
      this.body = 400;
    }
  };
}
