import SocialMedia from "@/components/common/social-media/social-media";

const HeroSection = () => {
  return (
    <section className="space-y-4 md:pb-32 md:pt-60 pb-14">
      <h2 className="md:text-[32px] text-2xl text-primary-blue-500 font-caveat font-light">
        Hi, I&apos;m Afif Wahidi!
      </h2>
      <h1 className="gradient-text md:text-5xl text-3xl md:h-14 inline-block font-bold">Graphic Design</h1>

      <p className="text-primary-dark-500 md:text-base text-sm md:leading-8 leading-6">
        UI/UX & Graphic Designer combining aesthetic excellence with user-centered design principles. Skilled in
        creating intuitive digital experiences and compelling visual identities using Figma and Adobe Creative Suite. I
        craft interfaces and brand assets that balance beauty with functionality, delivering designs that both engage
        users and communicate effectively.{" "}
      </p>
      <SocialMedia />
    </section>
  );
};

export default HeroSection;
