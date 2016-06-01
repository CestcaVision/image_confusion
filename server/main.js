import { Meteor } from 'meteor/meteor';
import images from 'images';
import qrcode from 'node-qrcode';

Meteor.startup(() => {
  // console.log(images);
});
Meteor.methods({
  'inviting_qrcard'(){
    qrcode({
      text: 'http://weibo.com',
      size: 200,
      qrcodePath: '/Users/Tricrepe/Desktop/image_test/public/cardqr.jpg',
    }).then(function(qrcodePath) {
      console.log(qrcodePath);  // balabala/node-qrcode/qrcode.png
});
  },
  'image_composition'(){
    images('/Users/Tricrepe/Desktop/image_test/public/bg_final.jpg')
    .size(640,1136)
    .draw(images("/Users/Tricrepe/Desktop/image_test/public/avatar.jpg").size(150,150), 27, 245)
    .draw(images("/Users/Tricrepe/Desktop/image_test/public/cardqr.jpg").size(220,220), 210, 800)
    .save('/Users/Tricrepe/Desktop/image_test/output.jpg',{quality:60});
  }
})
