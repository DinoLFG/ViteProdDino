export async function fetchData(fetchString: string) {
  try {
    const response = await fetch(fetchString);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
