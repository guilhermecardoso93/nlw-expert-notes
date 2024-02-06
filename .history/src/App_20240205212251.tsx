import Logo from "./assets/logo-nlw-expert.svg";

export function App() {
  return (
    <>
      <img src={Logo} alt="Logotipo" />
      <input type="text" placeholder="Busque por suas notas..."/>
    </>
  );
}
