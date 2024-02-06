import Logo from "./assets/logo-nlw-expert.svg";

export function App() {
  return (
    <div className='mx-auto max-w'>
      <img src={Logo} alt="Logotipo" />
      <input type="text" placeholder="Busque por suas notas..." />
    </div>
  );
}
