const { expect } = require('chai');
const { stub, fake } = require('sinon');
const asyncRoute = require('../../src/middlewares/asyncRoute');

describe('asyncRoute', () => {
  it('should be a function ', () => {
    expect(asyncRoute).to.be.an('function');
  });

  it('should accept one argument ', () => {
    expect(asyncRoute.length).to.equal(1);
  });

  it('should return a function ', () => {
    expect(asyncRoute()).to.be.an('function');
  });

  it('returned function should accept 3 arguments ', () => {
    expect(asyncRoute().length).to.equal(3);
  });

  it('should call passed function ', async () => {
    const asyncFunc = stub();
    asyncFunc.resolves();
    await asyncRoute(asyncFunc)();

    expect(asyncFunc.callCount).to.eql(1);
  });
  it('should not call next function when passed function resolves ', async () => {
    const asyncFunc = stub();
    const fakeNext = fake();
    asyncFunc.resolves();
    await asyncRoute(asyncFunc)({}, {}, fakeNext);

    expect(fakeNext.callCount).to.equal(0);
  });

  it('should call next function with error if passed function throws ', async () => {
    const asyncFunc = stub();
    const fakeNext = fake();
    const err = new Error('someTestError');
    asyncFunc.rejects(err);
    await asyncRoute(asyncFunc)({}, {}, fakeNext);

    expect(fakeNext.callCount).to.equal(1);
    expect(fakeNext.getCall(0).args[0]).to.eql(err);
  });
});
