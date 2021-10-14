import axios from "axios";

export const getFeatures = async () => {
  try {
    const result = await axios.get(
      "https://node.wingeat.com/test-api/features"
    );
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
    return result.data;
  } catch (e) {
    return e;
  }
};
