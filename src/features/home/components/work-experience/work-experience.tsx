import TitleSection from "@/components/common/title-section/title-section";
import Badge from "@/components/ui/badge/badge";
import { workExperience } from "@/constants";
import { getAssetUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const WorkExperience = () => {
  return (
    <section id="experiences" className="space-y-8 pt-8 border-y border-y-primary-dark-600">
      <TitleSection
        title="Work Experience"
        description="Below are some of my professional experiences where I contributed as a Graphic Designer and collaborated with teams to create visual assets, social media content, and product designs. These roles helped me strengthen my skills in visual communication and digital creativity."
      />

      <div className="space-y-8 pb-8">
        {workExperience.map(({ id, logo, company_name, company_url, title, period, tech_stacks, responsibilities }) => (
          <div key={id} className="space-y-4">
            <div className="flex md:items-center justify-between">
              <div className="flex md:items-center gap-2">
                <Image src={getAssetUrl(logo)} alt="logo" width={48} height={48} className="md:block hidden" />
                <div className="space-y-0.5">
                  <Link href={company_url ?? ""}>
                    <h3 className="md:text-lg text-sm font-bold">{company_name}</h3>
                  </Link>
                  <p className="md:text-base text-xs text-gray-300">{title}</p>
                </div>
              </div>
              <p className="md:text-sm text-xs text-primary-dark-500 md:mt-0 mt-1">{period}</p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {tech_stacks?.map((item, index) => <Badge key={index}>{item}</Badge>)}
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-primary-dark-500">The responsibilities include:</h3>
              <ul className="list-disc ml-4 space-y-1 text-primary-dark-500">
                {responsibilities?.map((item, index) => (
                  <li key={index} className="text-sm leading-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
