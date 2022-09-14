import { useTranslation } from "next-i18next";
import { useState } from "react";

const NewsletterForm = () => {
  const { t } = useTranslation("common");
  const [mail, setMail] = useState("");

  return (
    <div className="bg-secondary flex flex-col gap-6 justify-center items-center lg:col-start-3 py-20 lg:py-0">
      <h4 className="text-center font-alt text-lg">{t("stay_in_contact")}</h4>
      <form className="flex">
        <input
          className="bg-white border-b-2 border-gray-400 pl-3 text-xs font-sans flex-1"
          id="email"
          type="email"
          aria-label="email address"
          placeholder="E-mail..."
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <button
          className="bg-primary font-sans uppercase font-bold text-xs text-white shadow px-6 py-3"
          type="submit"
          // onClick={subscribe}
        >
          {t("subscribe")}
        </button>
        {/* add msg received here */}
      </form>
    </div>
  );
};

export default NewsletterForm;
