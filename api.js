export function fetchTrips() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Paris Adventure",
          date: "2024-07-10",
          days: [
            {
              day: 1,
              activities: [
                "Arrive in Paris",
                "Check in hotel",
                "Eiffel Tower visit",
              ],
            },
            { day: 2, activities: ["Louvre Museum", "Seine River Cruise"] },
          ],
        },
        {
          id: 2,
          title: "Tokyo Explorer",
          date: "2024-08-15",
          days: [
            { day: 1, activities: ["Arrive in Tokyo", "Shibuya Crossing"] },
          ],
        },
      ]);
    }, 800);
  });
}
