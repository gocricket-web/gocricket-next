import socials from "@/data/socials-data";
export default function ShareButtons() {
  return (
    <>
      {socials.map(({ id, component: ShareComponent, icon: Icon, props }) => (
        <ShareComponent key={id} {...props}>
          <Icon className="social-icon" size={40} round />
        </ShareComponent>
      ))}
    </>
  );
}
