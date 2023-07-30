/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const imageDataUrl = data.get('image');

    if (!imageDataUrl) {
      return { success: false };
    }

    const requestBody = {
      image: imageDataUrl,
    };

    fetch("https://express-drawing-api-production.up.railway.app/image_processing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response from the Python API:", data);
        // Process the response data as needed
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });


    return { success: true };
  }
};