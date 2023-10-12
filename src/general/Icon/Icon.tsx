import { ComponentType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@ui/utils";

export type iconProps = {
  alt?: string | undefined;
  elementSrc: ComponentType | string;
  round?: boolean;
  className?: string;
} & HTMLAttributes<HTMLElement>;

const Icon = ({ alt, elementSrc, className, round, ...rest }: iconProps) => {
  let classNames = className || "";

  if (round) {
    classNames += " gwk-rounded-full";
  }

  if (typeof elementSrc === "string") {
    // Si elementSrc es una cadena, renderiza una etiqueta <img>
    return (
      <img src={elementSrc} alt={alt} {...rest} className={cn(classNames)} />
    );
  } else if (typeof elementSrc === "function") {
    // Si elementSrc es una función (componente de React), renderiza el componente
    return renderComponent(elementSrc, alt, classNames, rest);
  } else {
    // Maneja otros tipos de elementSrc si es necesario
    return null; // O una representación por defecto
  }
};

function renderComponent(
  Component: ComponentType<Omit<iconProps, "elementSrc">>,
  alt: string | undefined,
  classNames: string,
  rest: HTMLAttributes<HTMLElement>,
): ReactNode {
  // Renderiza el componente de React y aplica las propiedades
  return <Component alt={alt} {...rest} className={classNames} />;
}

export default Icon;
