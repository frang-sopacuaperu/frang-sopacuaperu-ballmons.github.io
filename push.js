var webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BHm8sC94eDSulO2kGJLanXhaCgHtaGd4-nQV20SiQJ_0iCyN_MoMMxnKdwFDs2NVf_KZ9y4-Xe0omPWC-_bS8Zw",
  privateKey: "mh9FEu6cQFUEOyraOcAC-h7Kvjmj_lz-kt8hMO3aiV4",
};

webPush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cXRZYC0SNJs:APA91bGKZQBtMh5cjGFYj9YKrsbxk0lvRzBiTp6uJwm-xLgMw6kQkvifpits5eJON0FBfIwTFdhGer-UHCg_xaGTxk9ukUNGKtDuAAivBFVsza31gBHID0Fap284J5C6PmW2k5xfPWAt",
  keys: {
    p256dh:
      "BLj1AGRUcVps33VHiBMi33k1pvsSItmzWg3o6gYfxuMtjYzJtVED/q8OlLg+35ji9UYuIUKSc/AORAZ+fCcKPEo=",
    auth: "NhpOBcrhbccgUf9LJmE5UQ==",
  },
};
var payload = "Congratulations! You Got Ballmons App Notification!";

var options = {
  gcmAPIKey: "716718986488",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
