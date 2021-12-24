import { Button } from "carbon-components-react";

export function ExternalLink({ href, children, className }: any) {
  const handleClick = () => {
    window.open(href, "_blank", "noopener");
  };
  return (
    <Button className={className} onClick={handleClick}>
      {children}
    </Button>
  );
}
