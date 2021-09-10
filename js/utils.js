import "regenerator-runtime/runtime";

const CMS_TOKEN = "6fd7e3c665e3b3a2833a7f8217e7b2";

export const createHTMLElement = (elementName, classList, options) => {
  const element = document.createElement(elementName);

  if (typeof classList === "string") {
    element.classList.add(classList);
  } else {
    classList.map(className => element.classList.add(className));
  }

  if (options) {
    return Object.assign(element, options);
  }

  return element;
};

export const fetchDataFromCMS = async query => {
  setLoading(true);
  try {
    const response = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${CMS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
      }),
    });

    const { data } = await response.json();

    return data;
  } catch (e) {
    alert(e);
  } finally {
    setLoading(false);
  }
};

export const setLoading = async loading => {
  const loader = document.querySelector(".loader");
  if (loading) {
    loader.style.display = "flex";
    document.body.classList.add("--stop-scrolling");
    return;
  }

  loader.style.display = "none";
  document.body.classList.remove("--stop-scrolling");
};

export const getUserLanguage = () => {
  return (
    localStorage.getItem("lang") ||
    window.navigator.userLanguage ||
    window.navigator.language
  ).slice(0, 2);
};
