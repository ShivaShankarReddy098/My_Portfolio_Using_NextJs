import Arrow from "@/assets/icons/arrow-up-right.svg";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center">
          <h2 className="font-serif text-2xl">
            Let&apos;s create something amazing together
          </h2>
          <p className="text-lg mt-2 text-gray-600">
            Ready to bring your next project to life ?. Let&apos;s connect and
            discuss.I can help you achieve your goals.
          </p>
          <button className="text-white bg-gray-900 inline-flex px-6 h-12 rounded-2xl items-center gap-2 mt-8">
            <span className="font-semibold">Contact Me</span>
            <Arrow className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
