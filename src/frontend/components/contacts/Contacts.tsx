import { createUseStyles } from "react-jss";
import { ContactLine } from "./ContactLine";
import { Email } from "../icons/Email";
import { Github } from "../icons/Github";
import { LinkedIn } from "../icons/LinkedIn";
import { Phone } from "../icons/Phone";
import { Link } from "../Link";

type ContactsProps = {
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
};

const useStyles = createUseStyles({
  contactsContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
});

export const Contacts: React.FC<ContactsProps> = ({
  email,
  phone,
  linkedIn,
  github,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.contactsContainer}>
      <div>
        <ContactLine Icon={Email}>
          <Link href={`mailto:${email}`}>{email}</Link>
        </ContactLine>

        <ContactLine Icon={Phone}>
          <Link href={`tel:${phone}`}>{phone}</Link>
        </ContactLine>

        <ContactLine Icon={LinkedIn}>
          <Link href={linkedIn}>LinkedIn</Link>
        </ContactLine>

        <ContactLine Icon={Github}>
          <Link href={github}>GitHub</Link>
        </ContactLine>
      </div>
    </div>
  );
};
