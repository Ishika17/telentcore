export const fetchAllData = async () => {
  const [jds, candidates, applications] = await Promise.all([
    fetch("/api/jds").then((res) => res.json()),
    fetch("/api/candidates").then((res) => res.json()),
    fetch("/api/applications").then((res) => res.json()),
  ]);

  return { jds, candidates, applications };
};
