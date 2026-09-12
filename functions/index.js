const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { getMessaging } = require("firebase-admin/messaging");

initializeApp();

// Callable from the app's Admin dashboard only after the caller has signed in
// with Firebase Auth (see src/components/AdminView.tsx). Pushes one notification
// to every signed-up user's stored device token.
exports.sendNotificationToAll = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "You must be signed in as an admin.");
  }

  const title = typeof request.data?.title === "string" ? request.data.title.trim() : "";
  const body = typeof request.data?.body === "string" ? request.data.body.trim() : "";
  if (!title || !body) {
    throw new HttpsError("invalid-argument", "title and body are required.");
  }

  const snapshot = await getFirestore().collection("users").get();
  const tokens = snapshot.docs.map((d) => d.data().fcmToken).filter((t) => typeof t === "string" && t.length > 0);

  if (tokens.length === 0) {
    return { successCount: 0, failureCount: 0, totalTokens: 0 };
  }

  const response = await getMessaging().sendEachForMulticast({
    notification: { title, body },
    tokens,
  });

  return { successCount: response.successCount, failureCount: response.failureCount, totalTokens: tokens.length };
});
