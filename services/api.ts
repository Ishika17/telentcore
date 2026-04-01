export const fetchAllData = async () => {
  const [jds, candidates, applications] = await Promise.all([
    fetch("/api/jds").then((res) => res.json()),
    fetch("/api/candidates").then((res) => res.json()),
    fetch("/api/applications").then((res) => res.json()),
  ]);

  return { jds, candidates, applications };
};

export const fetchInitialData = async () => {
  const response = await fetch("/api/init");
  if (!response.ok) throw new Error("Failed to fetch dashboard data");
  return response.json(); // Returns { jds, candidates }
};
