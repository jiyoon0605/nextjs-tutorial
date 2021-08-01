import { useRouter } from "next/dist/client/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
  const router = useRouter();
  const activeItem = "home";

  const goLink = (_, { name }) => {
    switch (name) {
      case "home":
        router.push("/");
        return;
      case "about":
        router.push("/about");
        return;
      default:
        return;
    }
  };
  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={goLink}
      />
    </Menu>
  );
}
