const form = document.getElementById("urlForm");
const urlInput = document.getElementById("urlInput");
const resultDiv = document.getElementById("result");
const shortUrlAnchor = document.getElementById("shortUrl");


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const originalUrl = urlInput.value;
  try {
    // Shorten URL
    const response = await fetch("http://localhost:8000/api/url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: originalUrl }),
    });

    if (response.ok) {
      const data = await response.json();
      const shortUrl = `http://localhost:8000/${data.id}`;

      // Display shortened URL
      resultDiv.classList.remove("hidden");
      shortUrlAnchor.textContent = shortUrl;
      shortUrlAnchor.href = shortUrl;


      // Display shortened ID
      const shortenedIdSpan = document.getElementById("shortenedId");
      shortenedIdSpan.textContent = data.id; // Assign the shortened ID here


      // Fetch and display analytics
      const analyticsResponse = await fetch(`http://localhost:8000/api/url/analytics/${data.id}`);
      if (analyticsResponse.ok) {
        const analyticsData = await analyticsResponse.json();
        
        analyticsData.analytics.forEach((entry) => {
          const listItem = document.createElement("li");
          listItem.textContent = `Click at: ${entry.timeStamp}`;
          
        });

        // analyticsDiv.classList.remove("hidden");
      } else {
        console.error("Failed to fetch analytics.");
      }
    } else {
      alert("Failed to shorten URL. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please check your server connection.");
  }
});



const analyticsForm = document.getElementById("analyticsForm");
const shortIdInput = document.getElementById("shortIdInput");
const analyticsResultDiv = document.getElementById("analyticsResult");
const fetchedShortIdSpan = document.getElementById("fetchedShortId");
const fetchedTotalClicksSpan = document.getElementById("fetchedTotalClicks");
const fetchedClickDetailsList = document.getElementById("fetchedClickDetails");

analyticsForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const shortId = shortIdInput.value.trim();

  if (!shortId) {
    alert("Please enter a valid Short ID.");
    return;
  }

  try {
    // Fetch analytics for the entered short ID
    const response = await fetch(`http://localhost:8000/api/url/analytics/${shortId}`);

    if (response.ok) {
      const data = await response.json();

      // Update the UI with analytics data
      fetchedShortIdSpan.textContent = shortId;
      fetchedTotalClicksSpan.textContent = data.totalClicks;
      fetchedClickDetailsList.innerHTML = ""; // Clear previous data

      if (data.analytics.length > 0) {
        data.analytics.forEach((entry) => {
            const listItem = document.createElement("li");
            
            // Convert UTC time to local time
            const localTime = new Date(entry.timeStamp).toLocaleString(); // This will adjust to the user's local time zone
            
            listItem.textContent = `Click at: ${localTime}`;
            fetchedClickDetailsList.appendChild(listItem);
          });
          
      } else {
        const noDataItem = document.createElement("li");
        noDataItem.textContent = "No clicks recorded yet.";
        fetchedClickDetailsList.appendChild(noDataItem);
      }

      analyticsResultDiv.classList.remove("hidden");
    } else {
      alert("Analytics not found for the provided Short ID.");
    }
  } catch (error) {
    console.error("Error fetching analytics:", error);
    alert("An error occurred while fetching analytics. Please try again.");
  }
});

