export const fetchInitialData = async () => {
  const response = await fetch("/api/init", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  const data = await response.json();

  return {
    jds: data.jds || [],
    candidates: data.candidates || [],
    applications: data.applications || [],
  };
};
