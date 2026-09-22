type IconProps = {
  /** Путь к svg в /public/img/icons */
  name: string;
  size?: number;
  className?: string;
};

/**
 * Иконка рисуется маской, поэтому берёт цвет из currentColor
 * и одинаково работает в светлой и тёмной теме.
 */
export function Icon({ name, size = 16, className = "" }: IconProps) {
  return (
    <span
      aria-hidden
      className={`icon ${className}`}
      style={{
        width: size,
        height: size,
        ["--icon" as string]: `url(/img/icons/${name}.svg)`,
      }}
    />
  );
}
