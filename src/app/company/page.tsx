import CardCompany from "@/components/Cardcompany";
import { getEntryCompanypost } from "@/utili/contentful";
import * as React from "react";

interface ICompanyProps {}

const Company: React.FunctionComponent<ICompanyProps> = async (props) => {
  const companylist = await getEntryCompanypost();
  const printCompany = () => {
    if (companylist?.length) {
      return companylist.map((value: any) => {
        const { sys, fields } = value;
        console.log(sys, fields);

        return (
          <div key={sys.id}>
            <CardCompany
              id={sys.id}
              title={fields.title}
              image={fields.image.fields.file.url}
            />
          </div>
        );
      });
    }
  };
  return (
    <div className="flex justify-center gap-10 pt-5">{printCompany()}</div>
  );
};

export default Company;
