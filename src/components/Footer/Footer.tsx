import { Anchor } from "@ui/nav";
import { Icon } from "@ui/general";
import {
  LinkedinColor,
  TwitterColor,
  InstagramColor,
  FacebookColor,
} from "@ui/icons";

const Footer = () => {
  return (
    <div className="gwk-text-text-white gwk-flex gwk-flex-col gwk-gap-6 mobile:gwk-flex-row gwk-justify-between gwk-items-center">
      <div className="gwk-flex gwk-items-center gwk-justify-center">
        <span>Síguenos en</span>
        <span className="gwk-flex gwk-items-center">
          <Anchor
            className="gwk-w-6 gwk-h-6"
            theme="light"
            to="www.linkedin.com"
          >
            <Icon elementSrc={LinkedinColor} fluid />
          </Anchor>
          <Anchor
            className="gwk-w-6 gwk-h-6"
            theme="light"
            to="www.instagram.com"
          >
            <Icon elementSrc={InstagramColor} fluid />
          </Anchor>
          <Anchor
            className="gwk-w-6 gwk-h-6"
            theme="light"
            to="www.facebook.com"
          >
            <Icon elementSrc={FacebookColor} fluid />
          </Anchor>
          <Anchor
            className="gwk-w-6 gwk-h-6"
            theme="light"
            to="www.twitter.com"
          >
            <Icon elementSrc={TwitterColor} fluid />
          </Anchor>
        </span>
      </div>
      <div className="gwk-gap-6 gwk-flex gwk-justify-center gwk-items-center gwk-flex-col mobile:gwk-flex-row gwk-flex-nowrap">
        <span className="gwk-gap-6 gwk-flex gwk-justify-center gwk-flex-wrap">
          <Anchor size="normal" theme="light" to="/legal">
            Aviso legal
          </Anchor>
          <Anchor size="normal" theme="light" to="/about">
            ¿Quiénes somos?
          </Anchor>
          <Anchor size="normal" theme="light" to="/Privacy">
            Privacidad
          </Anchor>
          <Anchor size="normal" theme="light" to="/help">
            Ayuda
          </Anchor>
          <Anchor size="normal" theme="light" to="/contact">
            Contacto
          </Anchor>
        </span>

        <span>© 2023 Grawiki</span>
      </div>
    </div>
  );
};

export default Footer;
