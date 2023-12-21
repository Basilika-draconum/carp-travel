import Socials from "@/components/Socials/Socials";
import { formatPhoneNumber } from "@/entities/functions";
import { ContactInfo } from "@/entities/types";
import { useFetch } from "@/hooks/useFetch";

const ContactInfo = () => {
  const { data } = useFetch("contacts") as { data: ContactInfo[] };

  if (data === null) {
    return <div>No data available</div>;
  }
  const { email, phones, socials } = data[0];
  return (
    <address>
      <ul className="flex flex-col items-end not-italic gap-6 tablet:items-center tablet:flex-wrap tablet:h-[96px] tablet:mb-16 desktop:h-auto desktop:gap-0">
        <li className="flex flex-row gap-5 mb-6 tablet:mb-0 desktop:mb-16">
          <ul className="flex flex-col">
            {phones.map((phone) => (
              <li key={phone._key} className="hover-underline-animation">
                <a
                  href={`tel:${phone.phone}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-subTitle tablet:text-[16px] desktop:text-lg"
                >
                  {formatPhoneNumber(phone.phone)}
                </a>
              </li>
            ))}
          </ul>
          <p className="w-[81px] text-text text-[12px] tablet:leading-[20px] tablet:w-[100px] desktop:leading-[29px]">
            Phone number
          </p>
        </li>
        <li className="flex flex-row gap-5 mb-6 tablet:mb-0 desktop:mb-24">
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-subTitle tablet:text-[16px] desktop:text-lg hover-underline-animation"
          >
            {email}
          </a>
          <p className="w-[81px] text-text text-[12px] tablet:leading-[20px] tablet:w-[125px] desktop:leading-[34px]">
            E-mail
          </p>
        </li>
        <li className="flex flex-row gap-5 mb-3 tablet:mb-0 desktop:flex-row-reverse">
          <p className="text-text text-[12px] tablet:leading-[20px] desktop:w-[100px] desktop:leading-[31px]">
            Follow us
          </p>
          {socials && <Socials socials={socials} />}
        </li>
      </ul>
    </address>
  );
};

export default ContactInfo;
