import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
 'click button'(event, instance) {
    Meteor.call('inviting_qrcard',
    function (error, result) {
       Meteor.call('image_composition');
     } );
    instance.counter.set(instance.counter.get() + 1);
}
});
