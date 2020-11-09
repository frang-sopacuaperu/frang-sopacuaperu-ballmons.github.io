var webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BK-_5x5OtfkWZsQmHUtcTbIW5QPRYDY2uqLDVi5EymUetI-WW9yeG0kufsnw1qyukUbCFt9wj9HHvuknS_t9M84",
  privateKey: "N4XPS5nKjlcihIDqm3fT_3PVqKqktDV3JXYEsHMrYwY",
};

webPush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fNk1tLz9jUQ:APA91bFmjoX1kQ-nGADIKh7aWuoCE1ggWc8_nBCeaPeGuzSVCl_o3seOqMxLihFcZ2by2gFMSVxPQ46wORaEQpBd80562ZCt2y_hv-mYwIILd9GUfm8GZckFlIZkJJqW7771rbqp99L7",
  keys: {
    p256dh:
      "BAYEfiljGbjfGpW+ogWw0o9VoBFDre3zoXXaxIuP7TTpiK0Umx/ziBHd2zgD0mQ9AHMfxmWH/4+aOeW3ypR6+KI=",
    auth: "O6X1WKNwhPGwq1rPBR1ybw==",
  },
};
var payload = "Congratulations! You Got Ballmons App Notification!";

var options = {
  gcmAPIKey: "716718986488",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
