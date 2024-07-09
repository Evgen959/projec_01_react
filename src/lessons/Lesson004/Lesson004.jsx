import "./styles.css";
import Button from "../../components/Button/Button";
import Counter from "../../components/Counter/Counter";

function Lesson004() {
  /* Пример 2 - передачи функцию напрямую в пропс */
  const showMessage = () => {
    alert("Func outer click");
  };
  /* Пример 3 - передачи функцию напрямую в пропс */
  const showName = (name) => {
    alert(`Func outer click - ${name}`);
  };

  return (
    <div className="lesson04-component">
      <Counter />
      {/* Пример 1 - передачи функцию напрямую в пропс */}
      <Button name="Func Inner" onButtonClick={() => alert("Func inner")} />
      {/* Пример 2 - передачи функцию напрямую в пропс */}
      <Button name="Func Inner" onButtonClick={showMessage} />
      {/* Пример 3 - передачи функцию напрямую в пропс */}
      <Button 
      name="Func Outer with Parametr" 
      onButtonClick={() => showName("Tom")} />
    </div>
  );
}

export default Lesson004;
