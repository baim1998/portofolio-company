import { createClient } from "contentful";
import { Content } from "next/font/google";
import { space } from "postcss/lib/list";

export const createContentClien = () => {
  return createClient({
    space: "ceqtilflgsn8",
    accessToken: "QEGSIOYLWRlHnQwsTfh28vqrDGQrNbYf5HWs-OFrPDE",
  });
};

const client = createContentClien();
export const getEntryCompanypost = async () => {
  try {
    const response = await client.getEntries({
      content_type: "companypost",
    });
    const company = response.items;
    return company;
  } catch (error) {
    console.log(error);
  }
};
export const getEntryById = async (id: string) => {
  try {
    const getdatabyid = await client.getEntries({ "sys.id": id });
    const getdata = getdatabyid.items;
    return getdata;
  } catch (error) {
    console.log(error);
  }
};
