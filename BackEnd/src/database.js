const app = require("./index");
const admin = require("firebase-admin");
const serviceAccount = require("../assets/sketchnest-3d589-firebase-adminsdk-de57o-7ed237e7ce.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sketchnest-3d589-default-rtdb.firebaseio.com",
  databaseAuthVariableOverride: {
    uid: "my-service-worker",
  },
});
const db=admin.firestore();
module.exports=db