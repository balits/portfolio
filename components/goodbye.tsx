import { GrLinkedin, GrFacebook, GrInstagram, GrMail } from "react-icons/gr";

export const Goodbye = () => {
  return (
    <footer className="whiteOnBlack  gap-28 pt-16 pb-32  w-full flex flex-col items-center justify-center">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold w-full text-center">
          Thanks for visiting
        </h2>
        <p className="text-xl text-center">
          If you&apos;d like to work with me, or have any questions:
        </p>
      </div>

      <div className="space-y-8 ">
        <h3 className="text-xl w-full text-center">My socials:</h3>
        <ul className="flex gap-16">
          <li>
            <GrLinkedin size={24} />
          </li>
          <li>
            <GrFacebook size={24} />
          </li>
          <li>
            <GrInstagram size={26} />
          </li>
          <li>
            <GrMail size={24} />
          </li>
        </ul>
      </div>
    </footer>
  );
};
