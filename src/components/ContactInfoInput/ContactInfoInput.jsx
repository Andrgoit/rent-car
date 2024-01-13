export default function ContactInfoInput({ onChange, mail, phone }) {
  return (
    <div className=" py-5 flex flex-col sm:flex-row gap-5 sm:gap-10 border-b-[1px] border-b-text_primaty">
      <label className="flex flex-col">
        E-mail:
        <input
          type="email"
          name="mail"
          value={mail}
          onChange={onChange}
          className="text-black rounded-md outline-blue_primary  py-2 px-4 w-[250px] font-Manrope invalid:border-2 invalid:border-red-600 valid:border-green-600 valid:border-2"
          required
          autoComplete="off"
          placeholder="Enter your email"
          pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
        />
      </label>
      <label className="flex flex-col">
        Phone:
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={onChange}
          className="text-black rounded-md outline-blue_primary py-2 px-4 w-[250px] font-Manrope invalid:border-red-600 invalid:border-2 valid:border-green-600 valid:border-2"
          required
          autoComplete="off"
          placeholder="+380951122233"
          pattern="[\+][0-9]{13}"
        />
      </label>
    </div>
  );
}
