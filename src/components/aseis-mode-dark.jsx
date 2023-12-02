import React from "react";
import { ReactDOM, useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../assets/MoonIcon";
import { SunIcon } from "../assets/SunIcon";

export default function SwitchModeDark() {
  // Obtener el valor actual de 'mode' desde localStorage
  const mode = JSON.parse(localStorage.getItem("mode")) || false;

  // Estado para manejar el valor del interruptor
  const [checked, setChecked] = React.useState(mode);

  // Función para cambiar el modo y actualizar el localStorage
  const handleChange = () => {
    const newMode = !checked;
    setChecked(newMode);

    // Actualizar el valor en localStorage
    localStorage.setItem("mode", JSON.stringify(newMode));

    // Agregar o quitar clases al cuerpo del documento según el nuevo modo
    if (newMode) {
      document.body.classList.remove(
        "dark",
        "text-foreground",
        "bg-background"
      );
    } else {
      document.body.classList.add("dark", "text-foreground", "bg-background");
    }
  };

  // Efecto secundario para restaurar las clases al cargar el componente
  useEffect(() => {
    if (mode) {
      document.body.classList.add("dark", "text-foreground", "bg-background");
    } else {
      document.body.classList.remove(
        "dark",
        "text-foreground",
        "bg-background"
      );
    }
  }, [mode]);

  return (
    <Switch
      defaultSelected={mode}
      size="lg"
      color="success"
      onChange={handleChange}
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  );
}
