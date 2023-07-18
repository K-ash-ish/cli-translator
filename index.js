#!/usr/bin/env node
const { program } = require("commander");
const { translate } = require("@vitalets/google-translate-api");
program
  .name("translator")
  .description("Cli tool to translate the given text")
  .version("0.0.1")
  .usage("[text][options]")
  .option("-f, --from <lang>", "source language code (default:auto)")
  .option("-t, --to <lang>", "target language code (default:en)");

program.parse(process.argv);

const options = program.opts();
const { from = "auto", to = "en" } = options;
const text = program.args.join(" ");

if (!text) {
  program.outputHelp();
  process.exit(0);
}

translate(text, { from, to }).then((res) => console.log(res.text));
