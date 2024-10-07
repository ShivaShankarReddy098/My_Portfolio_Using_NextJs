import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
const words = [
  "Maintainable",
  "Search Optimized",
  "Secure",
  "Accessible",
  "Performant",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Usable",
  "Reliable",
];
const skills = [
  "JAVASCRIPT",
  "REACTJS",
  "NEXTJS",
  "TYPESCRIPT",
  "REACT QUERY",
  "NODEJS",
  "EXPRESSJS",
  "MONGODB",
  "MYSQL",
  "POSTGRESQL",
  "PYTHON",
  "C",
  "JAVA",
  "C++",
  "NUMPY",
  "PANDAS",
  "MATPLOTLIB",
  "DSA",
  "HTML",
  "TAILWIND CSS",
];
export const TapeSection = () => {
  return (
    <>
      <div className="py-16  overflow-x-clip">
        <div className=" bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,trasparent)]">
            <div className="flex flex-none gap-4 py-3 pr-4 lg:px-8 animate-move-left [animation-duration:50s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className=" inline-flex gap-4 items-center"
                    >
                      <span className="text-gray-900 uppercase font-extrabold text-sm">
                        {skill}
                      </span>
                      <StarIcon className="size-6 text-gray-100 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 ">
        <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,trasparent)]">
            <div className="flex flex-none gap-4 py-3 pr-4 lg:px-8 animate-move-left [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word) => (
                    <div key={word} className=" inline-flex gap-4 items-center">
                      <span className="text-gray-900 uppercase font-extrabold text-sm">
                        {word}
                      </span>
                      <StarIcon className="size-6 text-gray-100 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
