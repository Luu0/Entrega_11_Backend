import { Command } from "commander";

const program = new Command();

program
  .option("-d","Variable para debug", false)
  .option("-p <port>","Puerto del servidor", 8080)
  .option("--mode <mode>","Modo de trabajo", "develop")

  .requiredOption("-u <user>", "Usuario que va a utilizar la aplicacion", "No se ha declarado un usario");


program.parse();

console.log("Options", program.opts());
console.log("Remaining arguments", program.args);

export default program