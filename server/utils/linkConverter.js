// utils/linkConverter.js
export function getDownloadLink(viewUrl) {
  try {
    const url = new URL(viewUrl);

    // Extract the file ID from the URL path
    const pathParts = url.pathname.split("/");
    if (pathParts[1] === "file" && pathParts[2] === "d" && pathParts[3]) {
      const fileId = pathParts[3];
      const authuser = new URLSearchParams(url.search).get("authuser") || "0";

      return `https://drive.usercontent.google.com/download?id=${fileId}&export=download&authuser=${authuser}`;
    } else {
      throw new Error("File ID not found in the URL.");
    }
  } catch (error) {
    console.error("Error in getDownloadLink:", error.message);
    throw error;
  }
}
