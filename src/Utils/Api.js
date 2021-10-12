import axios from "axios";

export const getFeatures = async () => {
  try {
    const result = await axios.get(
      "https://node.wingeat.com/test-api/features"
    );
    console.log("getFeatures");
    return result.data;
  } catch (e) {
    return e;
  }
};
export const getLists = async (page) => {
  try {
    const result = await axios.get(
      `https://node.wingeat.com/test-api/items?page=${page}`
    );

    console.log("getLists");
    console.log(result.data);

    return result.data;
  } catch (e) {
    return e;
  }
};
