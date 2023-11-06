// Single country api call : https://restcountries.com/v3.1/name/{name}

// All countries :https://restcountries.com/v3.1/all

// Continent : https://restcountries.com/v3.1/region/{region}

export async function getCountries() {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getCountry(country) {
  const controller = new AbortController();
  const { signal } = controller;

  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`, {
      signal,
    });

    if (!res.ok) throw new Error("Something went wrong with fetching movies");

    const data = await res.json();
    if (data.Response === "False") throw new Error("Movie not found");

    return data;
  } catch (err) {
    throw new Error("Could not find country");
  } finally {
    controller.abort();
  }
}

export async function filterCountries(region) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
