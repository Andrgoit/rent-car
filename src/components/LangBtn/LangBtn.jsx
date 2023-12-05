import { useState } from "react";
import { getLangIcons } from "../../utils/getLangIcon";
import langIcons from "../../data/langIcons";

export default function LangBtn() {
  const [lang, setLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const filteredElements = langIcons.filter((icon) => icon.lang !== lang);

  const elements = filteredElements.map(({ id, icon, lang }) => (
    <li key={id} onClick={() => setLang(lang)}>
      <img src={icon} alt="language icon" />
    </li>
  ));

  return (
    <div
      className=" w-12 h-12 cursor-pointer relative "
      onClick={() => setIsOpen(!isOpen)}
    >
      <img src={getLangIcons(lang)} alt="language icon" />
      {isOpen && <ul className=" absolute  flex flex-col gap-3">{elements}</ul>}
    </div>
  );
}
