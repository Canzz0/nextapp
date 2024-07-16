export async function getPost() {
  try {
    const response = await fetch("http://localhost:3000/api/post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return []; 
  }
}
