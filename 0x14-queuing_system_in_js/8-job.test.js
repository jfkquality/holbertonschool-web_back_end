import kue from 'kue';

import createPushNotificationsJobs from './8-job.js';

const queue = kue.createQueue();
before(function() {
  queue.testMode.enter();
});

afterEach(function() {
  queue.testMode.clear();
});

after(function() {
  queue.testMode.exit()
});

it('createPushNotificationsJobs', function() {
  const list = [
    {
      phoneNumber: '4153518780',
      message: 'This is the code 1234 to verify your account'
    }
  ];
  createPushNotificationsJobs(list, queue);
  createPushNotificationsJobs({phone: '123', msg: 'hello'}, queue);
  queue.createJob('myJob', { foo: 'bar' }).save();
  queue.createJob('anotherJob', { baz: 'bip' }).save();
  expect(queue.testMode.jobs.length).to.equal(2);
  expect(queue.testMode.jobs[0].type).to.equal('myJob');
  expect(queue.testMode.jobs[0].data).to.eql({ foo: 'bar' });
